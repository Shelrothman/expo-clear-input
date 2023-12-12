
> This is not an official Expo SDK package.

# ❎ Expo Clear Input 📝

[![npm version](https://badge.fury.io/js/expo-clear-input.svg)](https://badge.fury.io/js/expo-clear-input)
<!-- [![npm downloads](https://img.shields.io/npm/dm/expo-clear-input.svg)](https://npm-stat.com/charts.html?package=expo-clear-input&from=2022-08-01) -->
![android](https://img.shields.io/badge/android-yes-green.svg)
![ios](https://img.shields.io/badge/iOS-yes-green.svg)
![web](https://img.shields.io/badge/web-yes-green.svg)

A cross-platform clear button to use in a `TextInput` for [React Native](https://reactnative.dev/) apps built with [Expo](https://expo.dev/).

## 🔬 Why This Library?

The [TextInput](https://reactnative.dev/docs/0.72/textinput) component has a [clearButtonMode](https://reactnative.dev/docs/0.72/textinput#clearbuttonmode-ios) prop but it only support ios and not android. In addition to that, it only works in single-line mode and not multiline.

**This library is a solution to the above by working on any platform (web, ios, android) *and* in both single and muilti line `<TextInput>`s.**

![Android and iOS Example](https://private-user-images.githubusercontent.com/62257716/289743965-d04ff8e1-044f-4131-9fd3-c923c81e532d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIzNTUzNzMsIm5iZiI6MTcwMjM1NTA3MywicGF0aCI6Ii82MjI1NzcxNi8yODk3NDM5NjUtZDA0ZmY4ZTEtMDQ0Zi00MTMxLTlmZDMtYzkyM2M4MWU1MzJkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjEyVDA0MjQzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdkMjAyODUxNDYzNGYxNDQ1N2RhMGNlYzE4YmFmZGFhMjcwMjI1ZDdkMTRmMTQ2OWM3MjM5ZjY3NWZiNTJhN2QmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.5y0YdoUWLXlWEc2Xv5M8GneO9YnAY6iFjUvj61Fpghc)


## ☑️ Prerequisites
- [React Native](https://reactnative.dev/) version 0.63 or higher
- [Expo](https://expo.dev/) version 42 or higher
- [React](https://reactjs.org/) version 17 or higher


## 📠 Installation

```bash
npm install expo-clear-input
```

## 📎 Usage

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
            />
            </View>
        </SafeAreaView>
    );
}
```

Supports custom icon for the button or use the default(recommended) 

```jsx
// this is the default icon used
<Octicons name="x-circle-fill" size={16} color="#ccc8c8" />
```

## 🎛️ Options

| Prop | Type | Description | Default |
| --- | --- | --- | --- |
| textInputProps | `AccessibilityProps & Partial<TextInputProps>` | All cross-platform-compatible props from `TextInputProps` except for style, which is handled by this component | same defaults as `<TextInput>` |
| textColor | `string` | The color of the text | "#fff" |
| backgroundColor | `string` | The background color of the input field | "#252326" |
| verticalPlacement | `'top'`<br>`'center'`<br>`'bottom'` | The vertical placement of the input field (always on the right side) | `'center'` |
| showButtonNode | `boolean` | Whether to show the button node; 'always' - visible whether or not its in focus. 'while-editing' - visible only when the input is in focus. 'unless-editing' - visible only when the input is not in focus | `while-editing` |
| icon | `ReactNode` | The icon to be displayed | `<Octicons name="x-circle-fill" size={16} color="#ccc8c8" />` |


## 📲 Example

Check out the [Interactive Demo on Snack](https://snack.expo.dev/@nini_bee/clearcontroltextinput-example)!

## 👥 Contributing

### Pre-requisites
- must be on WSL, Linux, or mac for local development or else you won't be able to run the scripts
- [Node.js](https://nodejs.org/en/) version 14 or higher