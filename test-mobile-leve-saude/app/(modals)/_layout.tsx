import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Stack>
        <Stack.Screen name="rate" options={{ title: "Avaliar" }} />
        <Stack.Screen name="myRate" options={{ title: "Minhas Avaliações" }} />
      </Stack>
    </>
  );
}
