import { NavigationProps } from "../navigation";
import { NavigationProp } from "@react-navigation/native";
import { Text, View } from "react-native";

type Props = {
  navigation: NavigationProp<NavigationProps>;
};

export function Home({ navigation }: Props) {
  return (
    <View>
      <Text onPress={() => navigation.navigate("Login")}>Home</Text>
    </View>
  );
}
