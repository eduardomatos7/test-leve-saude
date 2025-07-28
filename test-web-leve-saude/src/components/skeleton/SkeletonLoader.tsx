import type { FeedbackListProps } from "../../interface/feedback";
import SearchBar from "../dashboard/SearchBar";
import SortOptions from "../dashboard/SortOptions";
import SkeletonPage from "./SkeletonFeedbackList";
import { Skeleton } from "./SkeletonItem";

function SkeletonLoader({
  searchTerm,
  onSearchChange,
  sortField,
  sortDirection,
  onSortChange,
}: Omit<FeedbackListProps, "feedbacks" | "loading">) {
  return (
    <>
      <div className="space-y-4">
        <Skeleton className="h-[28px] w-[87px]" />
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
          <SortOptions
            sortField={sortField}
            sortDirection={sortDirection}
            onSortChange={onSortChange}
          />
        </div>
      </div>
      <SkeletonPage />
    </>
  );
}

export default SkeletonLoader;
