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
import Input from "../../components/Input";
import style from "./styles";

const logo = require("../../assets/images/logo_leve_saude.png");

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("Login");
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
            <Input
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <Input
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              placeholderTextColor="#999"
            />
            <Text style={style.instuctions}>
              Não possui uma conta?{" "}
              <Link href="/Register" style={style.spanRegister}>
                Cadastre-se
              </Link>
            </Text>
            <Button handleLogin={handleLogin} text="Entrar" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default LoginScreen;
