import {
  FirebaseAuthTypes,
  getAuth,
  onAuthStateChanged,
} from "@react-native-firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import Home from "./Home";
import LoginScreen from "./Login";

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

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

  if (initializing) return null;

  if (!user) {
    return <LoginScreen />;
  }
  return <Home />;
}

export default App;
