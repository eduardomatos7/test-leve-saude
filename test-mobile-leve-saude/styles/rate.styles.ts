import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 24,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 24,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textGrayLight,
    marginBottom: 16,
    textAlign: "center",
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 4,
  },
  labelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16,
    marginTop: 10,
    paddingHorizontal: 50,
  },
  labelLeft: {
    fontSize: 12,
    color: Colors.textGrayLight,
  },
  labelRight: {
    fontSize: 12,
    color: Colors.textGrayLight,
  },
  input: {
    width: "100%",
    minHeight: 200,
    backgroundColor: Colors.textArea,
    borderRadius: 10,
    padding: 12,
    paddingVertical: 30,
    fontSize: 14,
    color: "#333",
    marginBottom: 24,
    textAlignVertical: "top",
  },
  button: {
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 8,
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default styles;
