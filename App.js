import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView , TextInput} from 'react-native';

// PICKUP: must be anostic to like ther users prefereance on like it being whatever paretn element they aant for whaetevfer type of view thwey want

export default function App() {
    return (
        <SafeAreaView style={styles.container}> 
        {/* todo: make it <></> one done*/}
            <Text>Open up App.js to start working on your app!</Text>
            {/* <StatusBar style="auto" hidden/> info: agnostic.*/}
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
