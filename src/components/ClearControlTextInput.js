import React, { Fragment, useRef } from "react";
import { Octicons } from '@expo/vector-icons';

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
    // const textColor = props.style === 'dark' ? 'white' : 'black';


    return (
        <View
            style={[
                styles.inputParent,
                { backgroundColor: props.backgroundColor, }
            ]}
        >
            <TextInput
                onChangeText={props.onChangeText}
                placeholder={props.placeholder}
                value={props.value}
                style={[
                    styles.input,
                    { color: props.textColor }
                ]}
                multiline={props.multiline}
                ref={textInputRef}
                placeholderTextColor={props.placeholderTextColor}
                onFocus={() => setInFocus(true)}
                onBlur={() => setInFocus(false)}
                secureTextEntry={props.secureTextEntry}
                keyboardType={props.keyboardType}
                // scrollEnabled={props.multiline}
                returnKeyType={props.returnKeyType}
            // {...props.textInputProps}
            />
            {inFocus && <Pressable
                onPress={() => textInputRef.current.clear()}
                style={styles.clearButtonParent}
            >
                <Octicons name="x-circle-fill" size={16} color="#ccc8c8" />

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