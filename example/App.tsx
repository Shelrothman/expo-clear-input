import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ClearControlTextInput } from 'expo-clear-input-test';

// TODO: look at all the dependencies and remove any unused and unneccesary. ones

// TOdo: figure out if this can work only in bare worflow or if it can work in managed workflow too

export default function App(props?: any) {
    const { textInputProps, showButtonMode } = props;

    const [ text, setText ] = React.useState('');


    return (
        <View style={styles.container}>
            <ClearControlTextInput
                textInputProps={{ ...textInputProps, value: text, onChangeText: setText 
                , multiline: true,
                }}
                verticalPlacement='bottom'
                // showButtonMode={showButtonMode || 'while-editing'}
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
