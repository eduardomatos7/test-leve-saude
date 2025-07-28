import type { SortDirection, SortField } from "../services/feedbackService";

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
  searchTerm: string;
  // eslint-disable-next-line no-unused-vars
  onSearchChange: (value: string) => void;
  sortField: "createdAt" | "stars";
  sortDirection: "asc" | "desc";
  // eslint-disable-next-line no-unused-vars
  onSortChange: (field: "createdAt" | "stars", direction: "asc" | "desc") => void;
}

export interface SortOptionsProps {
  sortField: SortField;
  sortDirection: SortDirection;
  // eslint-disable-next-line no-unused-vars
  onSortChange: (field: SortField, direction: SortDirection) => void;
}
