import React from "react";
//@ts-check
import { Dimensions, Platform, StatusBar } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

// export * from "react-native-size-matters"

export { moderateScale as scale, moderateScale, verticalScale };

/**
 * Check if device is iphoneX
 */
export function isIphoneX() {
  const dimen = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export function getStatusBarHeight(safe?: string) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
}

/**
 * @description Get bottom space "safe area" of the device. Especially useful for iphone X screen
 * @param safe - Safe padding around bottom space
 */
export function getBottomSpace(safe?: string) {
  if (safe) {
    return isIphoneX() ? 34 + scale(10) : scale(10);
  } else {
    return isIphoneX() ? 34 : 0;
  }
}

export const DEVICE_WIDTH = Dimensions.get("window").width;
export const DEVICE_HEIGHT = Dimensions.get("window").height;

export const useDimension = (type: "screen" | "window" = "window") => {
  const [dimensions, setDimensions] = React.useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };
  React.useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const width = dimensions[type].width || Dimensions.get("window").width;
  const height = dimensions[type].height || Dimensions.get("window").height;
  return [width, height];
};

export const IS_ANDROID = Platform.OS === "android";
export const IS_WEB = Platform.OS === "web";

export const LOCAL_STORAGE_KEY = "mid5LocalStorage";
