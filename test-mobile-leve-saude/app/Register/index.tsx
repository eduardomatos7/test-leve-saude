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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Register", { name, email, password });
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
            <Input placeholder="Nome" value={name} onChangeText={setName} />
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
              Já possui uma conta?{" "}
              <Link href="/Login" style={style.spanRegister}>
                Faça Login
              </Link>
            </Text>
            <Button handleLogin={handleRegister} text="Cadastrar" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default LoginScreen;
