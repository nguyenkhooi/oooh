import { StyleProp, ViewStyle, TextStyle } from "react-native";

export interface Props extends dToastyOptions {
  offset?: number;
  placement: "top" | "bottom";
}

export interface State {
  toasts: Array<dToasty>;
}

export interface dToastyOptions {
  icon?: JSX.Element;
  type?: "normal" | "success" | "danger" | "warning" | "loading";
  duration?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;

  successIcon?: JSX.Element;
  dangerIcon?: JSX.Element;
  warningIcon?: JSX.Element;

  successColor?: string;
  dangerColor?: string;
  warningColor?: string;

  onPress?(id: string): void;
}

export interface dToasty extends dToastyOptions {
  id: string;
  onClose(): void;
  message: string | JSX.Element;
  placement?: "top" | "bottom";
}
