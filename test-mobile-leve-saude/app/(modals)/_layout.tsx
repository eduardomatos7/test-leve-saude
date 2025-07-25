import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="rate" options={{ title: "Avaliar" }} />
      <Stack.Screen name="myRate" options={{ title: "Minhas Avaliações" }} />
    </Stack>
  );
}
