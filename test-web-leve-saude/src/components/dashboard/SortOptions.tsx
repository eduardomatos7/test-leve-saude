import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import type { SortOptionsProps } from "../../interface/feedback";

export type SortField = "createdAt" | "stars";
export type SortDirection = "asc" | "desc";

export default function SortOptions({ sortField, sortDirection, onSortChange }: SortOptionsProps) {
  const handleSort = (field: SortField) => {
    if (field === sortField) {
      onSortChange(field, sortDirection === "asc" ? "desc" : "asc");
    } else {
      onSortChange(field, "desc");
    }
  };

  return (
    <div className="mb-4 flex flex-nowrap items-center gap-2">
      <span className="text-sm font-medium text-gray-700">Ordenar por:</span>
      <div className="flex space-x-2">
        <button
          onClick={() => handleSort("createdAt")}
          className={`flex min-w-16 cursor-pointer items-center justify-center rounded-md px-3 py-1 text-sm ${
            sortField === "createdAt"
              ? "bg-primary text-white"
              : "border-[1px] border-gray-400 bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Data
          {sortField === "createdAt" && (
            <span className="ml-1">
              {sortDirection === "asc" ? <MdArrowUpward /> : <MdArrowDownward />}
            </span>
          )}
        </button>
        <button
          onClick={() => handleSort("stars")}
          className={`flex min-w-20 cursor-pointer items-center justify-center rounded-md px-3 py-1 text-sm ${
            sortField === "stars"
              ? "bg-primary text-white"
              : "border-[1px] border-gray-400 bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Avaliação
          {sortField === "stars" && (
            <span className="ml-1">
              {sortDirection === "asc" ? <MdArrowUpward /> : <MdArrowDownward />}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
