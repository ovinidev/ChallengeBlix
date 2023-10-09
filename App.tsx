import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Toast from "react-native-toast-message";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/services/queryClient";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="dark" backgroundColor="transparent" translucent />
          <Navigation />
          <Toast />
        </View>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
