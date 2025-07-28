import { CgSpinner } from "react-icons/cg";

interface ButtonSubmitProps {
  isLoading?: boolean;
}
export default function ButtonSubmit({ isLoading = false }: ButtonSubmitProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="bg-secondary mt-2 w-full cursor-pointer rounded-lg border-none py-2 text-sm font-semibold text-white transition-colors hover:bg-[#3a1b38] disabled:opacity-70 md:text-base"
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <CgSpinner size={23} className="mr-3 animate-spin" />
          Entrando...
        </div>
      ) : (
        "Entrar"
      )}
    </button>
  );
}
