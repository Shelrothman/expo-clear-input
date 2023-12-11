import React, { Fragment, useRef } from "react";
import { Octicons } from '@expo/vector-icons';
import { StyleSheet, View, TextInput, Pressable } from 'react-native';

// PICKUP: in here test this is all working and then start getting the build set up



export function ClearControlTextInput(props) {
    const [ inFocus, setInFocus ] = React.useState(false);
    const textInputRef = useRef(null);
    const iconElement = props.icon ? props.icon : <Octicons name="x-circle-fill" size={16} color="#ccc8c8" />;

    /**
     * @function conditionalMode - determines whether or not the clear button should be visible
     * @param {string} mode - the mode that the clear button should be visible in
     * @returns {boolean} whether or not the clear button should be visible
     */
    const conditionalMode = (mode) => {
        switch (mode) {
            case 'always': return true;
            case 'while-editing': return inFocus;
            case 'unless-editing': return !inFocus;
            default: return inFocus;
        }

        /*
        it is true if ->  inFocus && mode === 'while-editing' || !inFocus && mode === 'unless-editing' || mode === 'always'
        it is false if -> inFocus && mode === 'unless-editing' || !inFocus && mode === 'while-editing'
        */
    };

    const handleFocus = () => {
        setInFocus(true);
        if (props.onFocus) props.onFocus();
        return;
    };
    const handleBlur = () => {
        setInFocus(false);
        if (props.onBlur) props.onBlur();
        return;
    };

    return (
        <View
            style={[
                styles.inputParent,
                { backgroundColor: props.backgroundColor, }
            ]}
        >
            <TextInput
                style={[
                    styles.input,
                    { color: props.textColor }
                ]}
                ref={textInputRef}
                onBlur={handleBlur}
                onFocus={handleFocus}
                {...props.textInputProps}
            />

            {((inFocus && props.showButtonMode === 'while-editing') ||
                (!inFocus && props.showButtonMode === 'unless-editing') ||
                (props.showButtonMode === 'always')) && <Pressable
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