import { getAuth, signOut } from "@react-native-firebase/auth";
import React from "react";
import { View } from "react-native";
import Button from "../../components/Home/Button";

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        strokColor
        width={60}
        text="Sair"
        onChange={() => {
          signOut(getAuth()).then(() => alert("Você saiu!"));
        }}
      />
    </View>
  );
}

export default Home;
