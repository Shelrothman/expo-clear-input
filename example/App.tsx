import { StyleSheet, Text, View } from 'react-native';

import * as ExpoClearInput from 'expo-clear-input';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoClearInput.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
