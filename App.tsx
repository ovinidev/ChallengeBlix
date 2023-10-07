import { Navigation } from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Navigation />
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
