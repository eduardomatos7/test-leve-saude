import { MdSentimentDissatisfied } from "react-icons/md";

interface EmptyFeedbackMessageProps {
  searchTerm?: string;
}

export default function EmptyFeedbackMessage({ searchTerm }: EmptyFeedbackMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-white p-10 shadow">
      <MdSentimentDissatisfied className="mb-2 h-10 w-10 text-gray-400" />
      {searchTerm ? (
        <p className="text-center text-gray-500">
          Nenhum feedback encontrado para <span className="font-medium">{`"${searchTerm}"`}</span>
        </p>
      ) : (
        <p className="text-center text-gray-500">Nenhum feedback disponível.</p>
      )}
    </div>
  );
}
