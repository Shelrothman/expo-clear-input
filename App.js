// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View
} from 'react-native';
import { ClearControlTextInput } from "./src/components/ClearControlTextInput";

// TODO: remove container stling after dev
export default function App() {

    const [ text, setText ] = React.useState('');

    // info: basically this houses all teh defaults i will seet ip

    // TODO: move this to example distro

    return (
        <SafeAreaView style={styles.container}>
            <ClearControlTextInput
                textInputProps={{
                    onChangeText: (text) => setText(text),
                    value: text,
                    placeholder: 'Enter a task',
                    placeholderTextColor: '#ccc8c8',
                    multiline: false,
                    secureTextEntry: false,
                    keyboardType: 'default',
                    returnKeyType: 'done',
                    // todo: default dark grey
                }}
                textColor={'white'}
                showButtonMode= {'while-editing'}
                backgroundColor={'#252326'}
            />
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
