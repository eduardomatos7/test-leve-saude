import { KeyboardTypeOptions } from "react-native";

export default interface FormFieldProps {
  name: string;
  control: any;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  error?: { message: string | undefined } | undefined;
}
