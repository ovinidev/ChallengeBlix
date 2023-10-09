import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Toast from "react-native-toast-message";
import { auth } from "../services/firebase";

interface LoginProps {
  email: string;
  password: string;
}

type RegisterProps = LoginProps;

export const login = async ({ email, password }: LoginProps) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    return user;
  } catch (e: any) {
    Toast.show({
      type: "error",
      text1: e.message,
    });
    throw new Error(e.message);
  }
};

export const register = async ({ email, password }: RegisterProps) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return user;
  } catch (e: any) {
    Toast.show({
      type: "error",
      text1: e.message,
    });
    throw new Error(e.message);
  }
};
