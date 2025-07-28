import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { type NavigateFunction } from "react-router";
import { db } from "./firebaseConfig";

export async function authLoginAdm(email: string, password: string, navigate: NavigateFunction) {
  const auth = getAuth();
  const q = query(
    collection(db, "Users"),
    where("email", "==", email),
    where("role", "==", "admin"),
  );
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/admin");
      })
      .catch(error => {
        alert("Usuário ou senha inválidos");
        console.error("Erro ao fazer login:", error);
      });
  } else {
    alert("Usuário não encontrado ou não é um administrador");
  }
}

export default async function handleLogout(navigate: NavigateFunction) {
  const auth = getAuth();
  try {
    await signOut(auth);
    navigate("/login");
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
  }
}
