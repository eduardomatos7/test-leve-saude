import { addDoc, collection } from "@react-native-firebase/firestore";
import { auth, db } from "./firebase";

export async function addRating(
  stars: number,
  comment: string,
): Promise<boolean> {
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
