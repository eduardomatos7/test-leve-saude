import { collection, getDocs, orderBy, query, type OrderByDirection } from "firebase/firestore";
import type { Feedback } from "../interface/feedback";
import { db } from "./firebaseConfig";

export type SortField = "createdAt" | "stars";
export type SortDirection = "asc" | "desc";

export async function fetchAllFeedbacks(
  sortField: SortField = "createdAt",
  sortDirection: SortDirection = "desc",
): Promise<Feedback[]> {
  try {
    const feedbacks: Feedback[] = [];
    const ratingsQuery = query(
      collection(db, "Ratings"),
      orderBy(sortField, sortDirection as OrderByDirection),
    );

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
