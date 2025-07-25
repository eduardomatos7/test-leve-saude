import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { getAuth, signOut } from "@react-native-firebase/auth";
import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/Colors";
import style from "../../styles/authStyles/styles";

const logo = require("../../assets/images/logo_leve_saude.png");

function Home() {
  function handleSignOut() {
    Alert.alert("Fazer Logout", "Tem certeza que deseja sair da conta?", [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => signOut(getAuth()).then(() => alert("Você saiu!")),
      },
    ]);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <View style={style.logoContainer}>
        <Image source={logo} style={style.logo} />
      </View>
      <TouchableOpacity style={style.buttonBackground} onPress={handleSignOut}>
        <MaterialIcons name="logout" size={24} color={Colors.white} />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: 900, color: Colors.logout }}>
        {" "}
        Sair da conta
      </Text>
    </View>
  );
}

export default Home;
