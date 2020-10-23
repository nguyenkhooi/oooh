import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, Animated, Text, TouchableWithoutFeedback } from "react-native";

const Toast = ({
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
  onPress
}) => {
  const containerRef = useRef(null);
  const [animation] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      useNativeDriver: true,
      duration: 250
    }).start();
    let closeTimeout = null;

    if (duration !== 0 && typeof duration === "number") {
      closeTimeout = setTimeout(() => {
        Animated.timing(animation, {
          toValue: 0,
          useNativeDriver: true,
          duration: 250
        }).start(() => onClose());
      }, duration);
    }

    return () => {
      closeTimeout && clearTimeout(closeTimeout);
    };
  }, []);

  if (icon === undefined) {
    switch (type) {
      case "success":
        {
          if (successIcon) {
            icon = successIcon;
          }

          break;
        }

      case "danger":
        {
          if (dangerIcon) {
            icon = dangerIcon;
          }

          break;
        }

      case "warning":
        {
          if (warningIcon) {
            icon = warningIcon;
          }

          break;
        }
    }
  }

  const animationStyle = {
    opacity: animation,
    transform: [{
      translateY: animation.interpolate({
        inputRange: [0, 1],
        outputRange: placement === "bottom" ? [20, 0] : [0, 20] // 0 : 150, 0.5 : 75, 1 : 0

      })
    }]
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

  const renderToast = () => /*#__PURE__*/React.createElement(Animated.View, {
    ref: containerRef,
    style: [styles.container, animationStyle, {
      backgroundColor
    }, style]
  }, icon ? /*#__PURE__*/React.createElement(View, {
    style: styles.iconContainer
  }, icon) : null, /*#__PURE__*/React.isValidElement(message) ? message : /*#__PURE__*/React.createElement(Text, {
    style: [styles.message, textStyle]
  }, message));

  return onPress ? /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    onPress: () => onPress(id)
  }, renderToast()) : renderToast();
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  message: {
    color: "#fff",
    fontWeight: "500"
  },
  iconContainer: {
    marginRight: 5
  }
});
export default Toast;
//# sourceMappingURL=toast.js.map