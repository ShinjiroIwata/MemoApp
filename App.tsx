import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './src/components/Hello';

const App = (): JSX.Element => {
  // 機能




  return (
    <View style={styles.container}>
      <Hello bang>World</Hello>
      <Hello style={{ fontSize: 16 }}>World</Hello>
      <Text>aaa Open up App.tsx to start working on your app!!!</Text>
      <StatusBar style="auto" />
    </View >
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

export default App