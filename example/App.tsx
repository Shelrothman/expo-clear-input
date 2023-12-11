import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ClearControlTextInput } from 'expo-clear-input';

export default function App() {


    const [ text, setText ] = React.useState('');


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
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
