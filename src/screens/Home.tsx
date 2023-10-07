import { NavigationProps } from "../navigation";
import { NavigationProp } from "@react-navigation/native";
import { View } from "react-native";
import { auth } from "../../firebaseConfig";
import { Button } from "../components/Button";

type Props = {
  navigation: NavigationProp<NavigationProps>;
};

export function Home({ navigation }: Props) {
  return (
    <View>
      <Button
        title="Logout"
        onPress={() => {
          auth.signOut();
          navigation.navigate("Login");
        }}
      />
      <Button
        title="Logout"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
}
