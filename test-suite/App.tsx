import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ClearControlTextInput } from 'expo-clear-input-test';

// INFO: this file really isnt used for anything other than a demonstration of implementation.🤷

export default function App(props?: any) {
    const { textInputProps, showButtonMode } = props;
    const [ text, setText ] = React.useState('');


    return (
        <View style={styles.container}>
            <ClearControlTextInput
                textInputProps={{ ...textInputProps, value: text, onChangeText: setText, multiline: true, }}
                showButtonMode={showButtonMode || 'while-editing'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});
