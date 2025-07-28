import type { Feedback } from "../../interface/feedback";
import { formatDate } from "../../utils/formatDate";
import StarsRating from "../starsRating";

interface FeedbackModalProps {
  feedback: Feedback | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function FeedbackModal({ feedback, isOpen, onClose }: FeedbackModalProps) {
  if (!isOpen || !feedback) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg md:max-h-[calc(100vh-2rem)]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Detalhes da avaliação</h2>
        </div>
        <div className="space-y-4">
          <div>
            <p className="mb-1 text-sm font-medium text-gray-500">Usuário</p>
            <p className="text-base text-gray-900">{feedback.name}</p>
          </div>
          <div>
            <p className="mb-1 text-sm font-medium text-gray-500">Avaliação</p>
            <div>{StarsRating(feedback.stars)}</div>
          </div>
          <div>
            <p className="mb-1 text-sm font-medium text-gray-500">Comentário</p>
            <div className="max-h-44 overflow-y-auto">
              <p className="text-base text-gray-900">{feedback.comment}</p>
            </div>
          </div>
          <div>
            <p className="mb-1 text-sm font-medium text-gray-500">Data</p>
            <p className="text-base text-gray-900">{formatDate(feedback.createdAt)}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-primary hover:bg-primary/90 cursor-pointer rounded px-4 py-2 text-white"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
