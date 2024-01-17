import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WebView source={{ uri: `https://siakrabkotabaru.com/` }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#FFFFFF`,
    paddingTop: 50,
  },
});
