
> This is not an official Expo SDK package.

# ❎ Expo Clear Input 📝

[![npm version](https://badge.fury.io/js/expo-clear-input.svg)](https://badge.fury.io/js/expo-clear-input)
[![npm downloads](https://img.shields.io/npm/dm/expo-clear-input.svg)](https://npm-stat.com/charts.html?package=expo-clear-input&from=2022-08-01)


[![supports iOS](https://img.shields.io/badge/iOS-999999.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)](https://github.com/expo/expo)
[![supports Android](https://img.shields.io/badge/Android-A4C639.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)](https://github.com/expo/expo)
[![supports web](https://img.shields.io/badge/Web-4285F4.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff)](https://github.com/expo/expo)

A cross-platform clear button to use in a `TextInput` for [React Native](https://reactnative.dev/) apps built with [Expo](https://expo.dev/).

## 📲 Demo

[![Demo in Expo Snack](https://img.shields.io/badge/INTERACTIVE%20DEMO%20IN%20SNACK-000.svg?style=for-the-badge&logo=EXPO&labelColor=FFF&logoColor=000)](https://snack.expo.dev/@nini_bee/clearcontroltextinput-example)


## 🔬 Why This Library?

The [TextInput](https://reactnative.dev/docs/0.72/textinput) component has a [clearButtonMode](https://reactnative.dev/docs/0.72/textinput#clearbuttonmode-ios) prop but it only support ios and not android. In addition to that, it only works in single-line mode and not multiline.

**This library is a solution to the above by working on any platform (web, ios, android) *and* in both single and muilti line `<TextInput>`s.**

![Android and iOS Example](https://private-user-images.githubusercontent.com/62257716/289743965-d04ff8e1-044f-4131-9fd3-c923c81e532d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIzNTc2NjIsIm5iZiI6MTcwMjM1NzM2MiwicGF0aCI6Ii82MjI1NzcxNi8yODk3NDM5NjUtZDA0ZmY4ZTEtMDQ0Zi00MTMxLTlmZDMtYzkyM2M4MWU1MzJkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjEyVDA1MDI0MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBmZmYyOWYyZjcyYjM0ODZhNWZjZjVkMjhhMjJjYzkyMzhkNDA5MTU4YTQwZGMyZDMxNDhhMjA3MGZkY2Y3OGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.zyJ3vChPtYBIIVD99Q6PxA2haX0qADgN7O-SKGSu77Y)

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
                    returnKeyType: 'done',
                }}
                showButtonMode={'always'}
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

| Prop              | Type                                           | Description                                                                                                                                                                                                | Default                                                       |
| ----------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| textInputProps    | `AccessibilityProps & Partial<TextInputProps>` | All cross-platform-compatible props from `TextInputProps` except for style, which is handled by this component                                                                                             | same defaults as `<TextInput>`                                |
| textColor         | `string`                                       | The color of the text                                                                                                                                                                                      | "#fff"                                                        |
| backgroundColor   | `string`                                       | The background color of the input field                                                                                                                                                                    | "#252326"                                                     |
| verticalPlacement | `'top'`<br>`'center'`<br>`'bottom'`            | The vertical placement of the input field (always on the right side)                                                                                                                                       | `'center'`                                                    |
| showButtonNode    | `boolean`                                      | Whether to show the button node; 'always' - visible whether or not its in focus. 'while-editing' - visible only when the input is in focus. 'unless-editing' - visible only when the input is not in focus | `while-editing`                                               |
| icon              | `ReactNode`                                    | The icon to be displayed                                                                                                                                                                                   | `<Octicons name="x-circle-fill" size={16} color="#ccc8c8" />` |

## 👥 Contributing

### Pre-requisites
- must be on WSL, Linux, or mac for local development or else you won't be able to run the scripts
- [Node.js](https://nodejs.org/en/) version 18 or higher

### Run the Example
- for WSL/WSL2 users, run `npm run start:wsl` to start up.
- for Linux/mac users, run `npm start` to start up.

### Test Locally
- utilize the detailed steps here: <https://dev.to/scooperdev/use-npm-pack-to-test-your-packages-locally-486e>
  - from root, run `npm pack --pack-destination ~` to create a tarball and place it in your home directory
  - then modify `./example/package.json` to point to the tarball file in your home directory. For example:

```json
{
    // ...
    "dependencies": {
        // its important to name it slightly different so it doesn't get confused when running install
        "expo-clear-input-test": "file:~/expo-clear-input-{VERSION}.tgz"
    }
}
```

- then run `npm install` in the `./example` directory to install the tarball
  - From there, you can test your changes manually in the example app with any of the start scripts.

#### Before Submitting a Pull Request
- Before any pull request is made, you must run the current unit tests and add any new tests for the changes you made.
- Run `npm run test` in the `/example` app to run the unit tests.
- **A copy of the report is mandatory to be included in the pull request.**

<!-- 
todo: these above steps could all be replaced with one script command 

a script that does the pack command
then cd to the example andadd it into the package.json the "file:~/path/to/your/script"n 
then delete the nodemodules and pacakges=lock.json and run npm install
"expo-clear-input" : "file:~/expo-clear-input-{VERSION}.tgz" into the package.json
and then a cleanup script that has to get run later before you publish it 
clean up and make /example distro only be for tests and the /local for to use while u go
add example pictures of the differnt spots
-->

<!-- todo: automatic need the report for a PR. -->