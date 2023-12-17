import React from "react";
import { Octicons } from '@expo/vector-icons';
import { StyleSheet, View, TextInput, Pressable, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import ClearControlTextInputProps from "./ExpoClearInput.types";

export default function ClearControlTextInput(props: ClearControlTextInputProps) {
    const [ inFocus, setInFocus ] = React.useState(false);
    const textInputRef = React.useRef<TextInput>(null);
    /** middle no matter what if it ain't multiline or defined */
    const verticalPlacement: string = (!props.textInputProps?.multiline) ? 'middle' : (props.verticalPlacement || 'middle');
    /** set while-editing as default if not defined */
    const placementMode: string = props.showButtonMode || 'while-editing';
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
        <View style={[
            styles.inputParent,
            verticalPlacement === 'top' ? [ styles.topPlacement ]
                : verticalPlacement === 'bottom' ? [ styles.bottomPlacement ]
                    : [ styles.defaultPlacement ],
            { backgroundColor: props.backgroundColor || "#252326" }
        ]}>
            <TextInput
                style={[ styles.input, { color: props.textColor || "#fff" } ]}
                ref={textInputRef}
                onBlur={handleBlur}
                onFocus={handleFocus}
                {...props.textInputProps}
            />
            {((inFocus && placementMode === 'while-editing') || (!inFocus && placementMode === 'unless-editing') || (placementMode === 'always'))
                && <Pressable
                    onPress={() => textInputRef!.current!.clear()}
                    style={[
                        styles.clearButtonParent,
                        { justifyContent: verticalPlacement === 'middle' ? 'center' : verticalPlacement === 'top' ? 'flex-start' : 'flex-end' },
                    ]}
                >
                    {props.icon ? props.icon : <Octicons name="x-circle-fill" size={22} color={props.textColor || "#ccc8c8"} />}
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
        borderColor: 'transparent', // todo: make this a custom prop, default: 'transparent'
        borderWidth: .5,
    },
    defaultPlacement: {
        /** goes to 15 if placement is at top */
        paddingTop: 5,
        /** goes to 15 if placement is at bottom */
        paddingBottom: 5,
    },
    topPlacement: {
        paddingTop: 15,
        paddingBottom: 5,
    },
    bottomPlacement: {
        paddingTop: 5,
        paddingBottom: 15,
    },
    input: {
        width: '95%',
        height: 'auto',
        borderRadius: 10,
        padding: 10,
        borderBottomLeftRadius: 10,
    }
});  