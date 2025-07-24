import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";

function Button({
  handleSubmit,
  text,
}: {
  handleSubmit: () => void;
  text: string;
}) {
  return (
    <TouchableOpacity style={style.button} onPress={handleSubmit}>
      <Text style={style.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    width: 150,
    height: 48,
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
