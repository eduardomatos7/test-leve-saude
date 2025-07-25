import { getApp } from "@react-native-firebase/app";
import { getAuth } from "@react-native-firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
} from "@react-native-firebase/firestore";

export async function addRating(
  stars: number,
  comment: string,
): Promise<boolean> {
  const app = getApp();
  const auth = getAuth(app);
  const db = getFirestore(app);
  const user = auth.currentUser;

  try {
    await addDoc(collection(db, "Ratings"), {
      userId: user?.uid,
      name: user?.displayName,
      stars,
      comment,
      createdAt: new Date(),
    });
    return true;
  } catch (error) {
    alert("Erro ao enviar avaliação:");
    console.log(error);
    return false;
  }
}
