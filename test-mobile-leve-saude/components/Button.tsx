import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { Colors } from "../constants/Colors";

function Button({
  handleSubmit,
  text,
  loading,
}: {
  handleSubmit: () => void;
  text: string;
  loading?: boolean;
}) {
  return (
    <TouchableOpacity
      disabled={loading ? true : false}
      style={loading ? style.buttonLoading : style.button}
      onPress={handleSubmit}
    >
      {loading ? (
        <ActivityIndicator size="small" color={Colors.background} />
      ) : (
        <Text style={style.buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
const baseButton: ViewStyle = {
  width: 200,
  height: 50,
  borderRadius: 8,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 8,
  backgroundColor: Colors.secondary,
};
const style = StyleSheet.create({
  button: {
    ...baseButton,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonLoading: {
    ...baseButton,
    opacity: 0.7,
  },
});

export default Button;
