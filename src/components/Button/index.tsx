import { Pressable, Text, PressableProps } from "react-native";
import { styles } from "./styles";

interface ButtonProps extends PressableProps {
  title: string;
}

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <Pressable style={styles.button} {...rest}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </Pressable>
  );
};
