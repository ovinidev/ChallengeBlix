import { addDoc, collection } from "firebase/firestore";
import { database } from "../services/firebase";
import Toast from "react-native-toast-message";

export interface CreateContentRequest {
  name: string;
  email: string;
  password: string;
  phone: number;
}

export async function createUser(data: CreateContentRequest) {
  try {
    await addDoc(collection(database, "/users"), data);
  } catch (e: any) {
    Toast.show({
      type: "error",
      text1: e.message,
    });
    throw new Error(e.message);
  }
}
