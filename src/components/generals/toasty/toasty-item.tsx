import { IconOooh } from "assets";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
} from "react-native";



export function ToastyItem(props: dToasty) {
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

  useEffect(function risingToast() {
    Animated.timing(animation, {
      toValue: 1,
      useNativeDriver: true,
      duration: 250,
    }).start();

    let closeTimeout: NodeJS.Timeout | null = null;

    if (duration !== 0 && typeof duration === "number") {
      closeTimeout = setTimeout(() => {
        Animated.timing(animation, {
          toValue: 0,
          useNativeDriver: true,
          duration: 250,
        }).start(() => onClose());
      }, duration);
    }

    return () => {
      closeTimeout && clearTimeout(closeTimeout);
    };
  }, []);

  function _onClose() {
    Animated.timing(animation, {
      toValue: 0,
      useNativeDriver: true,
      duration: 250,
    }).start(() => !!onClose && onClose());
  }

  let _icon = icon;

  if (icon === undefined) {
    switch (type) {
      case "success": {
        if (successIcon) {
          _icon = successIcon;
        }
        break;
      }

      case "danger": {
        if (dangerIcon) {
          _icon = dangerIcon;
        }
        break;
      }
      case "warning": {
        if (warningIcon) {
          _icon = warningIcon;
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
    <View
      style={[
        styles.container,
        {
          backgroundColor,
        },
        style,
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        style={{ flex: 5, paddingVertical: 5, paddingHorizontal: 11 }}
        onPress={!!onPress ? () => onPress(id) : null}
      >
        <Animated.View
          ref={containerRef}
          // style={[styles.container, animationStyle, { backgroundColor }, style]}
          style={{ ...animationStyle, flexDirection: "row" }}
        >
          {_icon ? <View style={styles.iconContainer}>{_icon}</View> : null}
          {React.isValidElement(message) ? (
            message
          ) : (
            <Text style={[styles.message, textStyle]}>{message}</Text>
          )}
        </Animated.View>
      </TouchableOpacity>

      <IconOooh
        onPress={() => _onClose()}
        preset={"default"}
        name={"x"}
        size={16}
        color={"white"}
        containerStyle={{
          flex: 1,
          paddingVertical: 8,
          alignItems: "stretch",
          paddingHorizontal: 11,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  message: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
  iconContainer: {
    marginRight: 5,
  },
});
