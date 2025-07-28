import { useEffect, useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import FeedbackList from "../../components/dashboard/FeedbackList";
import type { Feedback } from "../../interface/feedback";
import { fetchAllFeedbacks } from "../../services/feedbackService";
import type { SortDirection, SortField } from "../../components/dashboard/SortOptions";

function FeedbacksScreen() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<SortField>("createdAt");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  useEffect(() => {
    async function loadFeedbacks() {
      setLoading(true);
      try {
        const data = await fetchAllFeedbacks(sortField, sortDirection);
        setFeedbacks(data);
      } catch (error) {
        console.error("Erro ao listar feedbacks:", error);
      } finally {
        setLoading(false);
      }
    }

    loadFeedbacks();
  }, [sortField, sortDirection]);

  const handleSortChange = (field: SortField, direction: SortDirection) => {
    setSortField(field);
    setSortDirection(direction);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <DashboardLayout>
      <div className="p-4 md:p-6">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">Todos os Feedbacks</h1>
        <FeedbackList 
          feedbacks={feedbacks} 
          loading={loading}
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          sortField={sortField}
          sortDirection={sortDirection}
          onSortChange={handleSortChange}
        />
      </div>
    </DashboardLayout>
  );
}

export default FeedbacksScreen;
