import type { FeedbackListProps } from "../../interface/feedback";
import SkeletonLoader from "../skeleton/SkeletonLoader";
import EmptyFeedbackMessage from "./EmptyFeedbackMessage";
import SearchBar from "./SearchBar";
import SortOptions from "./SortOptions";
import TableFeedback from "./TableFeedback";

export default function FeedbackList({
  feedbacks,
  loading,
  searchTerm,
  onSearchChange,
  sortField,
  sortDirection,
  onSortChange,
}: FeedbackListProps) {
  if (loading) {
    return (
      <SkeletonLoader
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        sortField={sortField}
        sortDirection={sortDirection}
        onSortChange={onSortChange}
      />
    );
  }

  // Nao da pra fazer a pesquisa e retornar os
  // feedbacks filtrados diretamente do firebase porque nao tem como usar includes, como no sql puro
  // a alternativa seria usar uma plataforma de busca como Algolia ou ElasticSearch
  // ou fazer a pesquisa no frontend, filtrando os feedbacks já carregados
  const filteredFeedbacks = feedbacks.filter(feedback => {
    const searchTermLower = searchTerm.toLowerCase().trim();
    if (!searchTermLower) return true;

    return (
      feedback.name.toLowerCase().includes(searchTermLower) ||
      feedback.comment.toLowerCase().includes(searchTermLower)
    );
  });

  if (!filteredFeedbacks.length) {
    return (
      <div className="space-y-4">
        <h2 className="text-primary text-lg font-bold">
          Total: <span className="font-medium">0</span>
        </h2>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
          <SortOptions
            sortField={sortField}
            sortDirection={sortDirection}
            onSortChange={onSortChange}
          />
        </div>
        <EmptyFeedbackMessage searchTerm={searchTerm} />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-primary text-lg font-bold">
        Total: <span className="font-medium">{filteredFeedbacks.length}</span>
      </h2>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
        <SortOptions
          sortField={sortField}
          sortDirection={sortDirection}
          onSortChange={onSortChange}
        />
      </div>
      <TableFeedback filteredFeedbacks={filteredFeedbacks} />
    </div>
  );
}
