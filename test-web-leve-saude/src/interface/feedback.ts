export interface Feedback {
  key?: string;
  userId: string;
  name: string;
  stars: number;
  comment: string;
  createdAt: Date | { toDate: () => Date };
}

export interface FeedbackListProps {
  feedbacks: Feedback[];
  loading: boolean;
}
