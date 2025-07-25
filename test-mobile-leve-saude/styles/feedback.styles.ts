import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const style = StyleSheet.create({
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
  container: {
    paddingHorizontal: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.text,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "justify",
    lineHeight: 24,
    color: Colors.text,
    marginBottom: 20,
  },
  btnSection: {
    width: "100%",
    paddingHorizontal: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
export default style;
