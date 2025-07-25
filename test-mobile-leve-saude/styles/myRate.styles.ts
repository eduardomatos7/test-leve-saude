import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 18,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 18,
    marginTop: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 18,
  },
  card: {
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: Colors.textGrayDate,
    marginBottom: 2,
  },
  comment: {
    fontSize: 15,
    color: Colors.text,
    marginBottom: 8,
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginVertical: 8,
  },
  noRatingsText: {
    fontSize: 16,
    color: Colors.textGrayDate,
    textAlign: "center",
    marginTop: 20,
  },
});
export default styles;
