import React, { useRef } from "react";
import { Octicons } from '@expo/vector-icons';
import { StyleSheet, View, TextInput, Pressable, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import ClearControlTextInputProps from "./ExpoClearInput.types";

export default function ClearControlTextInput(props: ClearControlTextInputProps) {
    const [ inFocus, setInFocus ] = React.useState(false);
    const textInputRef = useRef<TextInput>(null);
    const iconElement = props.icon ? props.icon : <Octicons name="x-circle-fill" size={16} color="#ccc8c8" />;

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setInFocus(true);
        if (props.textInputProps?.onFocus) props.textInputProps.onFocus(e);
        return;
    };
    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setInFocus(false);
        if (props.textInputProps?.onBlur) props.textInputProps.onBlur(e);
        return;
    };

    return (
        <View style={[
            styles.inputParent, { backgroundColor: props.backgroundColor || "#252326", }
        ]}>
            <TextInput
                style={[ styles.input, { color: props.textColor || "#fff" } ]}
                ref={textInputRef}
                onBlur={handleBlur}
                onFocus={handleFocus}
                {...props.textInputProps}
            />
            {((inFocus && props.showButtonMode === 'while-editing') ||
                (!inFocus && props.showButtonMode === 'unless-editing') ||
                (props.showButtonMode === 'always')) && <Pressable
                    onPress={() => textInputRef!.current!.clear()}
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
        width: '95%',
        height: 'auto',
        borderRadius: 10,
        padding: 10,
        borderBottomLeftRadius: 10,
    },

});  