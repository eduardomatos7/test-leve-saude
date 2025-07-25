import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from "react-native";
import Button from "../../components/Button";
import { FormField } from "../../components/Form";
import { useLoginForm } from "../../hooks/useLoginForm";
import { authLogin } from "../../services/auth";
import style from "../../styles/authStyles/styles";
import { LoginFormatDataType } from "../../types/forms/onSubmitData";

const logo = require("../../assets/images/logo_leve_saude.png");

function LoginScreen() {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useLoginForm();
  const onSubtmit = (data: LoginFormatDataType) => {
    authLogin(data, setLoading);
  };

  return (
    <View style={style.container}>
      <View style={style.logoContainer}>
        <Image source={logo} style={style.logo} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "height" : "padding"}
        style={{ width: "100%", alignItems: "center" }}
      >
        <View style={{ width: "100%", alignItems: "center", gap: 40 }}>
          <View>
            <Text style={style.title}>Faça login para prosseguir!</Text>
          </View>
          <View style={style.loginContainer}>
            <FormField
              name="email"
              control={control}
              placeholder="E-mail"
              error={errors.email && { message: errors.email.message }}
            />

            <FormField
              name="password"
              control={control}
              placeholder="Senha"
              secureTextEntry
              error={
                errors.password
                  ? { message: errors.password.message }
                  : undefined
              }
            />
            <Text style={style.instuctions}>
              Não possui uma conta?{" "}
              <Link replace href="/register" style={style.spanRegister}>
                Cadastre-se
              </Link>
            </Text>
            <Button
              handleSubmit={handleSubmit(onSubtmit)}
              loading={loading}
              text="Entrar"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default LoginScreen;
