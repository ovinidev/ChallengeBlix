import { addDoc, collection } from "firebase/firestore";
import { database } from "../../firebaseConfig";

export interface CreateContentRequest {
  name: string;
  type: string;
}

export async function createContent(data: CreateContentRequest) {
  try {
    await addDoc(collection(database, "/contents"), data);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
