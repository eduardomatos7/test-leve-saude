import type { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "@react-native-firebase/firestore";
import Rating from "../interfaces/ratingsProps";
import { auth, db } from "./firebase";

export async function fetchRatings(): Promise<Rating[]> {
  const user = auth.currentUser;

  try {
    const ratings: Rating[] = [];
    const ratingsQuery = query(
      collection(db, "Ratings"),
      where("userId", "==", user?.uid),
      orderBy("createdAt", "desc"),
    );
    const snapshot = await getDocs(ratingsQuery);

    snapshot.forEach((doc: FirebaseFirestoreTypes.QueryDocumentSnapshot) => {
      const data = doc.data();
      ratings.push({
        ...data,
        key: doc.id,
      } as Rating);
    });
    return ratings;
  } catch (error) {
    console.error("Erro ao buscar avaliações:", error);
    return [];
  }
}
