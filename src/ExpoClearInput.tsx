import React from "react";
import { ColorValue, Platform } from "react-native";
import { Octicons } from '@expo/vector-icons';
import { StyleSheet, View, TextInput, Pressable, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import ClearControlTextInputProps from "./ExpoClearInput.types";

/** tests if a string is a hex value */
const isHex = (hex: string | ColorValue): boolean => /^#([0-9A-F]{3}){1,2}$/i.test(hex.toString());

export default function ClearControlTextInput(props: ClearControlTextInputProps) {
    const [ inFocus, setInFocus ] = React.useState(false);
    const textInputRef = React.useRef<TextInput>(null);

    /** middle no matter what if it ain't multiline or defined */
    const verticalPlacement: string = (!props.textInputProps?.multiline) ? 'middle' : (props.verticalPlacement || 'middle');
    /** set while-editing as default if not defined */
    const showButtonMode: string = props.showButtonMode || 'while-editing';
    /** default to "#252326" if not defined or not a hex value */
    const backgroundColor: string | ColorValue = (props.backgroundColor && isHex(props.backgroundColor)) ? props.backgroundColor : "#252326";
    /** default to "#ccc8c8" if not defined or not a hex value */
    const placeholderTextColor: string | ColorValue = (props.textInputProps?.placeholderTextColor && isHex(props.textInputProps.placeholderTextColor)) ? props.textInputProps.placeholderTextColor : "#ccc8c8";
    /** default to "#ccc8c8" if not defined or not a hex value */
    const iconColor: string | ColorValue = (props.iconColor && isHex(props.iconColor)) ? props.iconColor : "#ccc8c8";
    /** default to "#fff" if not defined or not a hex value */
    const textColor: string | ColorValue = (props.textColor && isHex(props.textColor)) ? props.textColor : "#ccc8c8";

    /** handleFocus sets inFocus to true and calls the onFocus prop if it exists */
    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setInFocus(true);
        if (props.textInputProps?.onFocus) props.textInputProps.onFocus(e);
        return;
    };
    /** handleBlur sets inFocus to false and calls the onBlur prop if it exists */
    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setInFocus(false);
        if (props.textInputProps?.onBlur) props.textInputProps.onBlur(e);
        return;
    };

    return (
        <View style={[ styles.inputParent, { paddingVertical: verticalPlacement === 'middle' ? 5 : 10, backgroundColor } ]}>
            <TextInput
                style={[ styles.input, { color: textColor } ]}
                ref={textInputRef}
                onBlur={handleBlur}
                onFocus={handleFocus}
                placeholderTextColor={placeholderTextColor}
                {...props.textInputProps}
            />
            {((inFocus && showButtonMode === 'while-editing') || (!inFocus && showButtonMode === 'unless-editing') || (showButtonMode === 'always'))
                && <Pressable
                    onPress={() => textInputRef!.current!.clear()}
                    style={[
                        styles.clearButtonParent,
                        { justifyContent: verticalPlacement === 'middle' ? 'center' : verticalPlacement === 'top' ? 'flex-start' : 'flex-end' },
                    ]}>
                    {props.icon ? props.icon : <Octicons name="x-circle-fill" size={22} color={iconColor} />}
                </Pressable>}
        </View >
    );
}

const styles = StyleSheet.create({
    clearButtonParent: { borderRadius: 50, },
    inputParent: {
        maxWidth: '100%',
        minWidth: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        /** ALWAYS 15 */
        paddingRight: 15,
        borderColor: 'transparent', /* todo: make this a custom prop, default: 'transparent'  */
        borderWidth: .5,
    },
    input: {
        width: '95%',
        height: 'auto',
        borderRadius: 10,
        padding: 10,
        borderBottomLeftRadius: 10,
        /** needed on web for accessibility */
        marginRight: Platform.OS === 'web' ? 10 : 0,
    }
});  