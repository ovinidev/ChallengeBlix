import { NavigationProp } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Button } from "../../components/Button";
import { NavigationProps } from "../../navigation";
import { Input } from "../../components/Input";
import { Form } from "../../components/Form";
import { useState } from "react";
import { createUser } from "../../api/users";
import Toast from "react-native-toast-message";
import { register } from "../../api/auth";
import { styles } from "./styles";

type Props = {
  navigation: NavigationProp<NavigationProps>;
};

export function Register({ navigation }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !phone || !email || !password) {
      Toast.show({
        type: "error",
        text1: "Preencha todos os campos",
      });

      return;
    }

    await createUser({
      name,
      email,
      phone,
      password,
    });

    await register({
      email,
      password,
    });

    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Form>
        <Input onChange={(e) => setName(e.nativeEvent.text)} label="Nome" />
        <Input
          onChange={(e) => setPhone(Number(e.nativeEvent.text))}
          label="Telefone"
        />
        <Input onChange={(e) => setEmail(e.nativeEvent.text)} label="Email" />
        <Input
          secureTextEntry
          onChange={(e) => setPassword(e.nativeEvent.text)}
          label="Senha"
        />

        <Button onPress={handleRegister} title="Criar" />
      </Form>
    </View>
  );
}
