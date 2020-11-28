import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import { spacing } from "utils";
import { sstyled } from "../sstyled/sstyled";
import { Txt } from "../txt/Txt";

export interface dPoppyOptions {
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

export interface dPoppy extends dPoppyOptions {
  id: string;
  onClose(): void;
  message: string | JSX.Element;
  placement?: "top" | "bottom";
}

export function PoppyItem(props: dPoppy) {
  const {
    id,
    onClose,
    icon,
    type = "normal",
    message,
    duration = 3000,
    style,
    textStyle,

    successIcon,
    dangerIcon,
    warningIcon,

    successColor,
    dangerColor,
    warningColor,

    placement,

    onPress,
  } = props;
  const containerRef = useRef<View>(null);
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      useNativeDriver: true,
      duration: 250,
    }).start();
  }, []);

  function _onClose() {
    Animated.timing(animation, {
      toValue: 0,
      useNativeDriver: true,
      duration: 250,
    }).start(() => onClose());
  }

  if (icon === undefined) {
    switch (type) {
      case "success": {
        if (successIcon) {
          icon = successIcon;
        }
        break;
      }

      case "danger": {
        if (dangerIcon) {
          icon = dangerIcon;
        }
        break;
      }
      case "warning": {
        if (warningIcon) {
          icon = warningIcon;
        }
        break;
      }
    }
  }

  const animationStyle = {
    opacity: animation,
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: placement === "bottom" ? [20, 0] : [0, 20], // 0 : 150, 0.5 : 75, 1 : 0
        }),
      },
    ],
  };

  let backgroundColor = "#333";
  switch (type) {
    case "success":
      backgroundColor = successColor || "#00C851";
      break;
    case "danger":
      backgroundColor = dangerColor || "#ff4444";
      break;
    case "warning":
      backgroundColor = warningColor || "#ffbb33";
  }

  return (
    <TouchableWithoutFeedback onPress={!!onPress ? () => onPress(id) : null}>
      <NiCtnr
        ref={containerRef}
        style={{
          ...animationStyle,
          borderWidth: 1,
          borderColor: backgroundColor,
        }}
      >
        {icon ? <View>{icon}</View> : null}
        {React.isValidElement(message) ? (
          message
        ) : (
          <Message onPress={_onClose}>{message}</Message>
        )}
      </NiCtnr>
    </TouchableWithoutFeedback>
  );
}

const NiCtnr = sstyled(Animated.View)((p) => ({
  backgroundColor: p.C.surface,
  width: spacing(8),
  paddingHorizontal: spacing(3),
  paddingVertical: spacing(3),
  marginBottom: spacing(8, "v"),
  borderRadius: 5,
  alignItems: "center",
  justifyContent: "center",
}));

const Message = sstyled(Txt)((p) => ({
  color: p.C.text,
  textAlign: "center",
  fontWeight: "500",
}));
