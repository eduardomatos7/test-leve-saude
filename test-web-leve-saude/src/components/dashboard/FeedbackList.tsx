import type { FeedbackListProps } from "../../interface/feedback";
import { formatDate } from "../../utils/formatDate";
import SkeletonPage from "../skeleton/SkeletonFeedbackList";
import StarsRating from "../starsRating";

export default function FeedbackList({ feedbacks, loading }: FeedbackListProps) {
  if (loading) {
    return <SkeletonPage />;
  }

  if (!feedbacks.length) {
    return (
      <div className="rounded-lg bg-white p-6 text-center shadow">
        <p className="text-gray-500">Nenhum feedback encontrado.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="overflow-x-auto">
        <table className="divide-divider min-w-full divide-y">
          <thead className="bg-gray-200">
            <tr>
              <th
                scope="col"
                className="text-text px-6 py-3 text-left text-xs font-medium tracking-wider uppercase"
              >
                Usuário
              </th>
              <th
                scope="col"
                className="text-text px-6 py-3 text-left text-xs font-medium tracking-wider uppercase"
              >
                Avaliação
              </th>
              <th
                scope="col"
                className="text-text px-6 py-3 text-left text-xs font-medium tracking-wider uppercase"
              >
                Comentário
              </th>
              <th
                scope="col"
                className="text-text px-6 py-3 text-left text-xs font-medium tracking-wider uppercase"
              >
                Data
              </th>
            </tr>
          </thead>
          <tbody className="divide-divider divide-y bg-white">
            {feedbacks.map(feedback => (
              <tr
                key={feedback.key}
                className="ease transition-colors duration-200 hover:bg-gray-200"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{feedback.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{StarsRating(feedback.stars)}</td>
                <td className="px-6 py-4">
                  <div className="max-w-xs truncate text-sm text-gray-500 md:max-w-md">
                    {feedback.comment}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                  {formatDate(feedback.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
