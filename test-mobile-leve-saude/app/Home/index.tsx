import { getAuth, signOut } from "@react-native-firebase/auth";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import Button from "../../components/Button";

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        handleSubmit={async () => {
          try {
            await signOut(getAuth());
            router.push("/Login");
            alert("Você saiu!");
          } catch (error) {
            alert("Erro ao sair da conta!");
            console.log(error);
          }
        }}
        text="Logout Test"
      />
    </View>
  );
}

export default Home;
