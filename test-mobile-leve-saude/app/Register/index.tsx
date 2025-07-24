import { Link } from "expo-router";
import React from "react";
import { Controller } from "react-hook-form";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useRegisterForm } from "../../hooks/useRegisterForm";
import style from "./styles";

const logo = require("../../assets/images/logo_leve_saude.png");

function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useRegisterForm();
  const onSubtmit = (data: { email: string; password: string }) => {
    console.log("Login Data:", data);
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
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Nome"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            {errors.name && (
              <Text style={style.errorText}>{errors.name.message}</Text>
            )}
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="E-mail"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  keyboardType="email-address"
                />
              )}
            />
            {errors.email && (
              <Text style={style.errorText}>{errors.email?.message}</Text>
            )}
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Senha"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  secureTextEntry={true}
                  placeholderTextColor="#999"
                />
              )}
            />
            {errors.password && (
              <Text style={style.errorText}>{errors.password?.message}</Text>
            )}

            <Text style={style.instuctions}>
              Já possui uma conta?{" "}
              <Link href="/Login" style={style.spanRegister}>
                Faça Login
              </Link>
            </Text>
            <Button handleSubmit={handleSubmit(onSubtmit)} text="Cadastrar" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default LoginScreen;
