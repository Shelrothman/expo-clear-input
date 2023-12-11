import React, { Fragment, useRef } from "react";
import { Octicons } from '@expo/vector-icons';
// import { TextInputProps } from 'react-native';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    TextInputProps, Pressable
} from 'react-native';





export function ClearControlTextInput(props) {
    const [ inFocus, setInFocus ] = React.useState(false);
    const textInputRef = useRef(null);
    const iconElement = props.icon ? props.icon : <Octicons name="x-circle-fill" size={16} color="#ccc8c8" />;


    const conditionalMode = () => {
        switch (props.mode) {
            //  if its always then it should be visible whether or not its in focus
            case 'always': return true;
            // if its while editing then it should be visible only when its in focus
            case 'while-editing': return inFocus;
            // if its unless-editing then it should be visible only when its not in focus
            case 'unless-editing': return !inFocus;
            default: return inFocus;
        }
    };

    // TODO: test these out
    const handleFocus = () => {
        setInFocus(true);
        props.onFocus && props.onFocus();
    };
    const handleBlur = () => {
        setInFocus(false);
        props.onBlur && props.onBlur();
    };

    return (
        <View
            style={[
                styles.inputParent,
                { backgroundColor: props.backgroundColor, }
            ]}
        >
            <TextInput
                // onChangeText={props.onChangeText}
                // placeholder={props.placeholder}
                // value={props.value}
                style={[
                    styles.input,
                    { color: props.textColor }
                ]}
                ref={textInputRef}
                onFocus={handleFocus}
                onBlur={handleBlur}
                // onBlur={() => setInFocus(false)}
                {...props.textInputProps}
            />

            {conditionalMode() && <Pressable
                onPress={() => textInputRef.current.clear()}
                style={styles.clearButtonParent}
            >
                {iconElement}
            </Pressable>}
        </View>
    );
}

const styles = StyleSheet.create({
    clearButtonParent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        borderRadius: 50,
    },
    inputParent: {
        maxWidth: '100%',
        minWidth: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingVertical: 5,
        paddingRight: 5,
        borderColor: '#474115',
        borderWidth: .5,
    },
    input: {
        width: '90%',
        height: 'auto',
        borderRadius: 10,
        padding: 10,
        borderBottomLeftRadius: 10,
    },

});  