import { addDoc, collection } from "firebase/firestore";
import { database } from "../../firebaseConfig";

export interface CreateContentRequest {
  name: string;
  email: string;
  password: string;
  phone: number;
}

export async function createUser(data: CreateContentRequest) {
  try {
    await addDoc(collection(database, "/users"), data);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
