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
import { useRegisterForm } from "../../hooks/useRegisterForm";
import { registerFormDataType } from "../../interfaces/onSubmitData";
import { authRegister } from "../../services/auth";
import style from "../../styles/authStyles/styles";

const logo = require("../../assets/images/logo_leve_saude.png");

function RegisterScreen() {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useRegisterForm();
  const onSubtmit = (data: registerFormDataType) => {
    authRegister(data, setLoading);
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
            <Text style={style.title}>Cadastre-se para prosseguir!</Text>
          </View>
          <View style={style.loginContainer}>
            <FormField
              name="name"
              control={control}
              placeholder="Nome"
              error={errors.name ? { message: errors.name.message } : undefined}
            />
            <FormField
              name="email"
              control={control}
              placeholder="E-mail"
              keyboardType="email-address"
              error={
                errors.email ? { message: errors.email.message } : undefined
              }
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
              Já possui uma conta?{" "}
              <Link replace href="/login" style={style.spanRegister}>
                Faça Login
              </Link>
            </Text>
            <Button
              loading={loading}
              handleSubmit={handleSubmit(onSubtmit)}
              text="Cadastrar"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default RegisterScreen;
