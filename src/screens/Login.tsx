import { NavigationProp } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";
import { NavigationProps } from "../navigation";
import { Input } from "../components/Input";
import { Form } from "../components/Form";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { login } from "../api/auth";

type Props = {
  navigation: NavigationProp<NavigationProps>;
};

export function Login({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!email || !password) {
      Toast.show({
        type: "error",
        text1: "Preencha todos os campos",
      });

      return;
    }

    await login({ email, password });

    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Form>
        <Input onChange={(e) => setEmail(e.nativeEvent.text)} label="Email" />
        <Input
          secureTextEntry
          onChange={(e) => setPassword(e.nativeEvent.text)}
          label="Senha"
        />

        <Button onPress={handleRegister} title="Entrar" />

        <Text style={styles.text}>Ou</Text>

        <Text
          onPress={() => navigation.navigate("Register")}
          style={styles.createAccount}
        >
          Criar nova conta
        </Text>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#020617",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  text: {
    color: "#f1f5f9",
    textAlign: "center",
    fontSize: 18,
  },
  createAccount: {
    color: "#ddd6fe",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    cursor: "pointer",
  },
});
