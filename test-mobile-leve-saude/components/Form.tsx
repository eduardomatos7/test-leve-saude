import { Controller } from "react-hook-form";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../constants/Colors";
import FormFieldProps from "../types/forms/formFieldProps";
import Input from "./Input";

export function FormField({
  name,
  control,
  placeholder,
  keyboardType,
  secureTextEntry,
  error,
}: FormFieldProps) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            placeholderTextColor="#999"
          />
        )}
      />
      {error && <Text style={style.errorText}>{error.message}</Text>}
    </>
  );
}

const style = StyleSheet.create({
  errorText: {
    color: Colors.error,
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
    textAlign: "left",
    width: "100%",
  },
});
