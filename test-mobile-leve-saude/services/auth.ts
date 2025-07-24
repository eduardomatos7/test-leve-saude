import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "@react-native-firebase/auth";
import { router } from "expo-router";

export async function authRegister(
  { email, password, name }: { email: string; password: string; name: string },
  setLoading: (loading: boolean) => void,
) {
  try {
    setLoading(true);
    const userCredential = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password,
    );
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: name,
    });
    alert("Usuário cadastrado com sucesso!");
    router.push("/Home");
    setLoading(false);
    return userCredential;
  } catch (error) {
    if (typeof error === "object" && error !== null && "code" in error) {
      if ((error as any).code === "auth/email-already-in-use") {
        alert("Esse e-mail já está em uso!");
      }
      if ((error as any).code === "auth/invalid-email") {
        console.log("Email inválido!");
      }
      setLoading(false);
    }
    console.log(error);
  }
}

export async function authLogin(
  { email, password }: { email: string; password: string },
  setLoading: (loading: boolean) => void,
) {
  try {
    setLoading(true);
    const userCredential = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password,
    );
    router.push("/Home");
    setLoading(false);
    return userCredential;
  } catch (error) {
    if (typeof error === "object" && error !== null && "code" in error) {
      if (error.code === "auth/invalid-credential") {
        alert("Email ou senha incorretos!");
      }
      setLoading(false);
    }
  }
}
