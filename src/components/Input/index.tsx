import { Text, TextInput, View, TextInputProps } from "react-native";
import { styles } from "./styles";

interface InputProps extends TextInputProps {
  label: string;
}

export const Input = ({ label, ...rest }: InputProps) => {
  return (
    <View style={styles.rootInput}>
      <Text style={styles.label}>{label}</Text>
      <TextInput keyboardType="default" style={styles.input} {...rest} />
    </View>
  );
};
