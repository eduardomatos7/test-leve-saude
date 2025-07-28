import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import type React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), firebaseUser => {
      setUser(firebaseUser);
    });
    return unsubscribe;
  }, []);

  if (user === undefined) {
    return null;
  }

  if (!user) {
    navigate("/login", { replace: true });
  }

  if (!user) return null;

  return <>{children}</>;
}
