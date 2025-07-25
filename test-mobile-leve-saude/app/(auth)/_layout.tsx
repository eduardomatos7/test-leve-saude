import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="feedback"
        options={{ title: "Enviar Avaliação", headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Meu Perfil", headerShown: false }}
      />
    </Tabs>
  );
}
