import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { ClearControlTextInput } from 'expo-clear-input';

export default function App() {


    const [ text, setText ] = React.useState('');


    return (
        <SafeAreaView style={styles.container}>

            <View style={{ marginHorizontal: 20, marginBottom: 20, width: "80%" }}>
            <ClearControlTextInput
                textInputProps={{
                    onChangeText: (text) => setText(text),
                    value: text,
                    placeholder: 'some search word',
                    placeholderTextColor: '#ccc8c8',
                    multiline: false,
                    secureTextEntry: false,
                    keyboardType: 'default',
                    returnKeyType: 'done',
                }}
                textColor={'white'}
                showButtonMode= {'always'}
                backgroundColor={'#252326'}
            />
            </View>
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
