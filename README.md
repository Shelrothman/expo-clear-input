> This is experimental and in private mode while the first package is in development

# expo-clear-input
A cross-platform clear button to use in text inputs for React Native apps built with Expo

## What is This?

The [TextInput](https://reactnative.dev/docs/0.72/textinput) component has a [clearButtonMode](https://reactnative.dev/docs/0.72/textinput#clearbuttonmode-ios) prop but it only support ios and not android. In addition to that, it only works in single-line mode and not multiline.

**This library is a solution to the above by working on any platform (web, ios, android) *and* in both single and muilti line `<TextInput>`s.**

Supports custom icon for the button or use the default(recommended) 

```tsx
<Octicons name="x-circle-fill" size={16} color="#ccc8c8" />;
```

## Options


placement options (top bottom, middle...)  default is top/.. Always on the right side bc duh thats part ofthe whole point of this lib
> TODO: include all the options a user has here.


# Contributing

## Pre-requisites
- must be using WSL or linux or mac for local development bc of the build scripts