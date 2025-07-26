import LoginForm from "../../components/form/formLogin";
import Header from "../../components/header";

export default function Login() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <LoginForm />
    </div>
  );
}
