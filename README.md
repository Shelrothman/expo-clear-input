
> [!WARNING]
> This package is not officially supported by Expo. It is experimental. Use at your own risk.

# expo-clear-input
A cross-platform clear button to use in text inputs for [React Native](https://reactnative.dev/) apps built with [Expo](https://expo.dev/).

## What is This?

The [TextInput](https://reactnative.dev/docs/0.72/textinput) component has a [clearButtonMode](https://reactnative.dev/docs/0.72/textinput#clearbuttonmode-ios) prop but it only support ios and not android. In addition to that, it only works in single-line mode and not multiline.

**This library is a solution to the above by working on any platform (web, ios, android) *and* in both single and muilti line `<TextInput>`s.**

## Installation

```sh
npm install expo-clear-input
```

## Usage

```jsx
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { ClearControlTextInput } from 'expo-clear-input';

export default function App() {

    const [ text, setText ] = React.useState('');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center', }}>
            <View style={{ marginHorizontal: 20, marginBottom: 20, width: "80%" }}>
            <ClearControlTextInput
                textInputProps={{
                    onChangeText: (text) => setText(text),
                    value: text,
                    placeholder: 'enter search...',
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
```


Supports custom icon for the button or use the default(recommended) 

```jsx
<Octicons name="x-circle-fill" size={16} color="#ccc8c8" />
```

Renders looking something like this:

![input screenshot](https://private-user-images.githubusercontent.com/62257716/289710189-a75346d4-e7ec-4a26-a53e-11481f701928.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIzNDIyNTUsIm5iZiI6MTcwMjM0MTk1NSwicGF0aCI6Ii82MjI1NzcxNi8yODk3MTAxODktYTc1MzQ2ZDQtZTdlYy00YTI2LWE1M2UtMTE0ODFmNzAxOTI4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjEyVDAwNDU1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWExMDUyNGNjMjlkZmQxZDg4ZWZlNjhhMmU2MGUxZjg5YzkwOThmNmVjYjA2MTRmNzgwYjMxZGI4OTUzMjc4MWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.bs_QOFniNlfi0dT9GqJPm0PXMgxun1aOkTnir-cCnxI)

## Options

| Prop | Type | Description | Default |
| --- | --- | --- | --- |
| textInputProps | `AccessibilityProps & Partial<TextInputProps>` | All cross-platform-compatible props from `TextInputProps` except for style, which is handled by this component | same defaults as `<TextInput>` |
| textColor | `string` | The color of the text | "#fff" |
| backgroundColor | `string` | The background color of the input field | "#252326" |
| verticalPlacement | `'top'`<br>`'center'`<br>`'bottom'` | The vertical placement of the input field (always on the right side) | `'center'` |
| showButtonNode | `boolean` | Whether to show the button node; 'always' - visible whether or not its in focus. 'while-editing' - visible only when the input is in focus. 'unless-editing' - visible only when the input is not in focus | `while-editing` |
| icon | `ReactNode` | The icon to be displayed | `<Octicons name="x-circle-fill" size={16} color="#ccc8c8" />` |



# Contributing

## Pre-requisites
- must be using WSL or linux or mac for local development bc of the build scripts