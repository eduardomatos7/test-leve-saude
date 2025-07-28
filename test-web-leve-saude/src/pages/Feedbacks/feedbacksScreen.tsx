import { useEffect, useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import FeedbackList from "../../components/dashboard/FeedbackList";
import type { Feedback } from "../../interface/feedback";
import { fetchAllFeedbacks } from "../../services/feedbackService";

function FeedbacksScreen() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeedbacks() {
      try {
        const data = await fetchAllFeedbacks();
        setFeedbacks(data);
      } catch (error) {
        console.error("Erro ao listar feedbacks:", error);
      } finally {
        setLoading(false);
      }
    }

    loadFeedbacks();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-4 md:p-6">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">Todos os Feedbacks</h1>
        <FeedbackList feedbacks={feedbacks} loading={loading} />
      </div>
    </DashboardLayout>
  );
}

export default FeedbacksScreen;
