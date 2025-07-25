import { getAuth, signOut } from "@react-native-firebase/auth";
import React from "react";
import { Text, View } from "react-native";
import Button from "../../components/Button";

function Feedback() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feedback authenticated</Text>
      <Button
        handleSubmit={async () => {
          try {
            await signOut(getAuth());
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

export default Feedback;
