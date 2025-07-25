import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  title: {
    color: Colors.primary,
    fontSize: 24,
    fontFamily: "Arial",
  },
  logo: {
    width: 194,
    height: 70,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  loginContainer: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  spanRegister: {
    color: Colors.primary,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  instuctions: { marginVertical: 16, color: Colors.label, fontSize: 14 },
  errorText: {
    color: Colors.error,
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
    textAlign: "left",
    width: "100%",
  },
});
export default style;
