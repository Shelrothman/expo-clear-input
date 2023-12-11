// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View
    // TextInput,
    // Pressable
} from 'react-native';
import { ClearControlTextInput } from "./src/components/ClearControlTextInput";

// TODO: remove container stling after dev
export default function App() {

    const [ text, setText ] = React.useState('');

    // info: basically this houses all teh defaults i will seet ip
    return (
        <SafeAreaView style={styles.container}>
            {/* <ClearControlTextInput props={props} /> */}
            {/* <View style={{ padding: 10 }}> */}

                <ClearControlTextInput
                    onChangeText={(text) => setText(text)}
                    value={text}
                    placeholder={'Enter a task'}
                    placeholderTextColor={'#ccc8c8'}
                    // multiline={false}
                    multiline={true}
                    secureTextEntry={false}
                    keyboardType={'default'}
                    returnKeyType={'done'}
                    textColor={'white'}
                    // rodo: default dark grey
                    backgroundColor={'#252326'}
                // TODO: percentage
                // textInputProps={{ placeholder: 'Enter a task' }}

                />
            {/* </View> */}
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
