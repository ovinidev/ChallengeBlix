import { Text, Pressable, PressableProps } from "react-native";
import { styles } from "./styles";

interface FilterProps extends PressableProps {
  name: string;
}

export const Filter = ({ name, ...rest }: FilterProps) => {
  return (
    <Pressable style={styles.button} {...rest}>
      <Text style={styles.buttonTitle}>{name}</Text>
    </Pressable>
  );
};
