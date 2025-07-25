import { getApp } from "@react-native-firebase/app";
import { getAuth } from "@react-native-firebase/auth";
import type { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "@react-native-firebase/firestore";
import Rating from "../interfaces/ratingsProps";

export async function fetchRatings(): Promise<Rating[]> {
  const app = getApp();
  const auth = getAuth(app);
  const user = auth.currentUser;

  try {
    const ratings: Rating[] = [];
    const app = getApp();
    const db = getFirestore(app);

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
