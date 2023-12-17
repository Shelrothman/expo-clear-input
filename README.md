
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

![Android and iOS Example](https://private-user-images.githubusercontent.com/62257716/291111819-ce5ca9b2-d7e8-4307-93cd-706b0a2d6917.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI4NTU0NzgsIm5iZiI6MTcwMjg1NTE3OCwicGF0aCI6Ii82MjI1NzcxNi8yOTExMTE4MTktY2U1Y2E5YjItZDdlOC00MzA3LTkzY2QtNzA2YjBhMmQ2OTE3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE3VDIzMTkzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVkMTI3MTg4YjcyYjkzMzQxYmM3N2M0MmU0YjJlMjZjZGRlYTY0MTVjNDY3NmIzYjExOTk0MGMwNWVjZWNkMjAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.t4-EWBDqakaqgva4yc4hFsxsonkNU9CFg9jre1Q3AuM)
![Web Example](https://private-user-images.githubusercontent.com/62257716/291097238-69362f5e-bf55-41e2-b165-173c19a5d65e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI4NTU1NTEsIm5iZiI6MTcwMjg1NTI1MSwicGF0aCI6Ii82MjI1NzcxNi8yOTEwOTcyMzgtNjkzNjJmNWUtYmY1NS00MWUyLWIxNjUtMTczYzE5YTVkNjVlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE3VDIzMjA1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJjMWJjYTg3MGVkN2E0YWQ1MWMxM2ZkMWY1YWZlZWQxZWQzNDZkMmFhYjllOTM3MDYyMzc3NGViYzFhMjEwY2MmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.7HbiruKLvN7qjZlRdPfslvQ9qitHGiVCvuiI4IgagoQ)

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
| showButtonNode    | `boolean`                                      | Whether to show the button node; **always**: visible whether or not its in focus. **while-editing**: visible only when the input is in focus. **unless-editing**: visible only when the input is not in focus | `while-editing`                                               |
| icon              | `ReactNode`                                    | The icon to be displayed                                                                                                                                                                                   | `<Octicons name="x-circle-fill" size={16} color="#ccc8c8" />` |

## 👥 Contributing

- Please create your own branch off of `main` to get started
- Then develop, build, test, and create a Pull Request to `main` to trigger a review.

### Pre-requisites
- must be on WSL, Linux, or mac for local development or else you won't be able to run the scripts
- [Node.js](https://nodejs.org/en/) version 18 or higher

### Development
- during development of your new code, you may want to have an example app up in parrallel to view your changes in real time.
- YMMV but the recommended approach to this is to create a local expo project using `expo-template-blank-typescript` and import your `./src/*` files into its `App.tsx`. 
  - Then view your changes in real time.

### Test Locally
- After you've finished your changes, test that the packaged module works as expected.
  - Set up the testing suite with a local package of the module with your changes:
    - run from project root: `npm run setuptest`
  - once that runs successfuly, start up the test:
    - run from project root:  `npm run test`  

#### Before Submitting a Pull Request
- **No PR will be accepted without a copy of the testing report**
- *Please ensure you add new tests if applicable for your new feature.* 