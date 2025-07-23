import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { Colors } from "../constants/Colors";

function Input(props: TextInputProps) {
  return (
    <TextInput
      style={style.input}
      placeholderTextColor={Colors.label}
      {...props}
    />
  );
}
const style = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
});
export default Input;
