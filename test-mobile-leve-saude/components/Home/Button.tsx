import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { Colors } from "../../constants/Colors";

function Button({
  backgroundColor,
  strokColor,
  width,
  text,
  onChange,
}: {
  backgroundColor?: boolean;
  strokColor?: boolean;
  width: number;
  text: string;
  onChange: () => void;
}) {
  return (
    <TouchableOpacity
      style={[
        style.buttonBackground,
        { width: `${width}%` },
        !backgroundColor && { backgroundColor: "transparent" },
        strokColor ? style.buttonStroke : {},
      ]}
      onPress={onChange}
    >
      <Text
        style={[
          style.buttonText,
          strokColor && {
            color: Colors.primary,
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
const baseButton: ViewStyle = {
  height: 46,
  borderRadius: 10,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 8,
};
const style = StyleSheet.create({
  buttonBackground: {
    ...baseButton,
    backgroundColor: Colors.primary,
  },
  buttonStroke: {
    ...baseButton,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
