import { NavigationProps } from "../navigation";
import { NavigationProp } from "@react-navigation/native";
import { Text, View } from "react-native";

type Props = {
  navigation: NavigationProp<NavigationProps>;
};

export function Loading({ navigation }: Props) {
  return (
    <View>
      <Text>Carregando...</Text>
    </View>
  );
}
