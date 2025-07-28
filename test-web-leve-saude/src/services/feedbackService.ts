import { collection, getDocs, orderBy, query } from "firebase/firestore";
import type { Feedback } from "../interface/feedback";
import { db } from "./firebaseConfig";

export async function fetchAllFeedbacks(): Promise<Feedback[]> {
  try {
    const feedbacks: Feedback[] = [];
    const ratingsQuery = query(collection(db, "Ratings"), orderBy("createdAt", "desc"));

    const snapshot = await getDocs(ratingsQuery);

    snapshot.forEach(doc => {
      const data = doc.data();
      feedbacks.push({
        ...data,
        key: doc.id,
      } as Feedback);
    });

    return feedbacks;
  } catch (error) {
    console.error("Erro ao listar feedbacks", error);
    return [];
  }
}
