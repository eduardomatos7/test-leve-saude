import { MdHome } from "react-icons/md";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex max-w-md flex-col items-center justify-center rounded-lg bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">404</h1>
        <p className="mb-6 text-gray-600">A página que você está procurando não existe</p>
        <button
          onClick={() => navigate("/admin")}
          className="bg-primary hover:bg-primary/90 flex cursor-pointer items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-colors"
        >
          <MdHome size={20} />
          <span>Voltar</span>
        </button>
      </div>
    </div>
  );
}
