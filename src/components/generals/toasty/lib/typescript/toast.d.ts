import { FC } from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
export interface ToastOptions {
    icon?: JSX.Element;
    type?: "normal" | "success" | "danger" | "warning";
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
export interface ToastProps extends ToastOptions {
    id: string;
    onClose(): void;
    message: string | JSX.Element;
    placement?: "top" | "bottom";
}
declare const Toast: FC<ToastProps>;
export default Toast;
