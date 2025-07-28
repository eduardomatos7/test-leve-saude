import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router";
import { loginSchema } from "../../schemas/login.schema";
import { authLoginAdm } from "../../services/auth";
import type { loginSchemaType } from "../../types/login.types";
import ButtonSubmit from "./buttonSubmit";
import InputField from "./inputField";
import Title from "./title";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<loginSchemaType> = (data: loginSchemaType) => {
    setIsLoading(true);

    authLoginAdm(data.email, data.password, navigate);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-2 md:min-h-[calc(100vh-80px)]">
      <form
        className="w-full max-w-xs min-w-0 rounded-lg bg-transparent p-4 md:max-w-[400px] md:p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Title />
        <InputField
          {...register("email", { required: "E-mail é obrigatório" })}
          id="email"
          icon={<MdOutlineEmail size={20} />}
          placeholder="E-mail"
          type="email"
          error={errors.email}
        />
        <InputField
          {...register("password", { required: "Senha é obrigatória" })}
          id="password"
          icon={<MdLockOutline size={20} />}
          placeholder="Senha"
          type="password"
          error={errors.password}
        />
        <ButtonSubmit isLoading={isLoading} />
      </form>
    </div>
  );
}

export default LoginForm;
