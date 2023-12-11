> This is experimental and in private mode while the first package is in development

# expo-clear-input
A cross-platform clear button to use in text inputs for React Native apps built with Expo

<!--todo: dynamic the versioin in lunk -->
The [TextInput](https://reactnative.dev/docs/0.72/textinput) component has a [clearButtonMode](https://reactnative.dev/docs/0.72/textinput#clearbuttonmode-ios) prop but it only support ios and not android. In addition to that, it only works in single-line mode and not multiline.

This library is a solution to the above by working on any platform (web, ios, android) *and* in both single and muilti line `<TextInput>`s.

???:
Supports custom icons of choice [@expo/vector-icons](https://docs.expo.io/guides/icons/) or use default.

placement options (top bottom, middle...)  default is top/.. Always on the right side bc duh thats part ofthe whole point of this lib

// PICKUP: must be anostic to like ther users prefereance on like it being whatever paretn element they aant for whaetevfer type of view thwey want
