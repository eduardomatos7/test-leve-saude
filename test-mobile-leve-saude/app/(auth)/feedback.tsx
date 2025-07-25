import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import Button from "../../components/Home/Button";
import style from "../../styles/feedback.styles";

const logo = require("../../assets/images/logo_leve_saude.png");

function Feedback() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={style.logoContainer}>
        <Image source={logo} style={style.logo} />
      </View>
      <View style={style.container}>
        <Text style={style.title}>Bem vindo ao Leve Saúde!</Text>
        <Text style={style.subtitle}>
          Aqui, você pode compartilhar seus feedbacks e acessar todas as suas
          avaliações feitas, ajudando-nos a oferecer sempre o melhor cuidado.
        </Text>
      </View>
      <View style={style.btnSection}>
        <Button
          text="Avaliar"
          onChange={() => router.push("/(modals)/rate")}
          backgroundColor
          width={37}
        />
        <Button
          text="Ver Avaliações"
          width={60}
          strokColor
          onChange={() => router.push("/(modals)/myRate")}
        />
      </View>
    </View>
  );
}

export default Feedback;
