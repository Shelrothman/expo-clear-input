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
    // const textColor = props.style === 'dark' ? 'white' : 'black';

    const iconElement = props.icon ? props.icon : <Octicons name="x-circle-fill" size={16} color="#ccc8c8" />;


    const conditionalMode = () => {
        switch (props.mode) {
            case 'always':
                //  if its always then it should be visible whether or not its in focus
                return true;
            case 'while-editing':
                // if its while editing then it should be visible only when its in focus
                return inFocus;
            case 'unless-editing':
                // if its unless-editing then it should be visible only when its not in focus
                return !inFocus;
            default: return inFocus;
        }
    };

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
                returnKeyType={props.returnKeyType}
                // its like i want all of them ezxcept the ones specific to ios and android...
                // TODO: these can just be a spresad but putthese al;l in type file./..
                allowFontScaling={props.allowFontScaling}
                autoCapitalize={props.autoCapitalize}
                autoComplete={props.autoComplete}
                autoCorrect={props.autoCorrect}
                autoFocus={props.autoFocus}
                blurOnSubmit={props.blurOnSubmit}
                caretHidden={props.caretHidden}
                contextMenuHidden={props.contextMenuHidden}
                defaultValue={props.defaultValue}
                editable={props.editable}
                enterKeyHint={props.enterKeyHint}
                inputMode={props.inputMode}
                maxFontSizeMultiplier={props.maxFontSizeMultiplier}
                maxLength={props.maxLength}
                onChange={props.onChange}
                onContentSizeChange={props.onContentSizeChange}
                onEndEditing={props.onEndEditing}
                onPressIn={props.onPressIn}
                onPressOut={props.onPressOut}
                onKeyPress={props.onKeyPress}
                onLayout={props.onLayout}
                onScroll={props.onScroll}
                onSelectionChange={props.onSelectionChange}
                onSubmitEditing={props.onSubmitEditing}
                readOnly={props.readOnly}
                selection={props.selection}
                selectionColor={props.selectionColor}
                selectTextOnFocus={props.selectTextOnFocus}
                showSoftInputOnFocus={props.showSoftInputOnFocus}
                textAlign={props.textAlign}
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