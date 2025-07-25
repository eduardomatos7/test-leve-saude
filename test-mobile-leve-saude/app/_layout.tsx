import {
  FirebaseAuthTypes,
  getAuth,
  onAuthStateChanged,
} from "@react-native-firebase/auth";
import { Stack, useRouter, useSegments } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const router = useRouter();
  const segments = useSegments();

  const handleAuthStateChanged = useCallback(
    (user: FirebaseAuthTypes.User | null) => {
      setUser(user);
      if (initializing) setInitializing(false);
    },
    [initializing],
  );

  useEffect(() => {
    const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
    return subscriber;
  }, [handleAuthStateChanged]);

  useEffect(() => {
    if (initializing) return;
    const isAuthRoute = segments[0] === "(auth)";
    const isRegisterRoute = segments[0] === "register";
    if (user && !isAuthRoute && !isRegisterRoute) {
      router.replace("/(auth)/feedback");
    } else if (!user) {
      router.replace("/login");
    } else if (user && isRegisterRoute && !isAuthRoute) {
      setTimeout(() => {
        router.replace("/(auth)/feedback");
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, initializing]);

  if (initializing)
    return (
      <View
        style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
      >
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(public)" options={{ headerShown: false }} />
      <Stack.Screen name="(modals)" options={{ headerShown: false }} />
    </Stack>
  );
}
