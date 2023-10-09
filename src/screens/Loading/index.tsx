import { Image, View } from "react-native";
import { styles } from "./styles";

export function Loading() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/popcorn.png")}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}
