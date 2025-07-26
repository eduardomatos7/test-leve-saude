import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import ButtonSubmit from "./buttonSubmit";
import InputField from "./inputField";
import Title from "./title";
function LoginForm() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-2 md:min-h-[calc(100vh-80px)]">
      <form className="w-full max-w-xs min-w-0 rounded-lg bg-transparent p-4 md:max-w-[400px] md:p-8">
        <Title />
        <InputField
          id="email"
          icon={<MdOutlineEmail size={20} />}
          placeholder="E-mail"
          type="email"
        />
        <InputField
          id="password"
          icon={<MdLockOutline size={20} />}
          placeholder="Senha"
          type="password"
        />

        <ButtonSubmit />
      </form>
    </div>
  );
}

export default LoginForm;
