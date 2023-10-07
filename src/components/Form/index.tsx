import { ReactNode } from "react";
import { View, ViewProps } from "react-native";
import { styles } from "./styles";

interface FormProps extends ViewProps {
  children: ReactNode;
}

export const Form = ({ children, ...rest }: FormProps) => {
  return (
    <View style={styles.form} {...rest}>
      {children}
    </View>
  );
};
