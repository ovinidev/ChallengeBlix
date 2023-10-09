import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { Content } from "../interfaces/contents";
import { database } from "../services/firebase";

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

export async function getContents(contentType: string) {
  try {
    const q = contentType
      ? query(
          collection(database, "/contents"),
          where("type", "==", contentType)
        )
      : query(collection(database, "/contents"));

    let contents: Content[] = [];
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      contents.push(doc.data() as Content);
    });

    return contents;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
