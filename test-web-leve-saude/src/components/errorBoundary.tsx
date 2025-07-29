import { Component, type ErrorInfo, type ReactNode } from "react";
import { MdErrorOutline, MdHome } from "react-icons/md";
import { useNavigate } from "react-router";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

function BackToHomeButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/admin")}
      className="bg-primary hover:bg-primary/90 flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-colors"
    >
      <MdHome size={20} />
      <span>Voltar</span>
    </button>
  );
}
class ErrorBoundaryClass extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-background flex min-h-screen flex-col items-center justify-center p-4">
          <div className="max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
            <div className="mb-4 flex justify-center">
              <MdErrorOutline className="text-error h-24 w-24" />
            </div>
            <h1 className="mb-4 text-3xl font-bold text-gray-800">Algo deu errado</h1>
            <p className="mb-6 text-gray-600">
              Ocorreu um erro inesperado na aplicação. Por favor, tente novamente.
            </p>
            <BackToHomeButton />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function ErrorBoundary({ children }: ErrorBoundaryProps) {
  return <ErrorBoundaryClass>{children}</ErrorBoundaryClass>;
}
