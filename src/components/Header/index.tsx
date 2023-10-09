import { Image, View, Pressable } from "react-native";
import { styles } from "./styles";
import { auth } from "../../services/firebase";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => auth.signOut()}>
        <Image
          source={{
            uri: "https://cdn.icon-icons.com/icons2/2518/PNG/512/logout_icon_151219.png",
          }}
          style={{ width: 40, height: 40 }}
        />
      </Pressable>
    </View>
  );
};
