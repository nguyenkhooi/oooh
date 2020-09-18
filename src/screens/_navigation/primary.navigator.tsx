import {
  createStackNavigator,
  HeaderBackButton,
  TransitionPresets,
} from "@react-navigation/stack";
import { withTheme } from "engines";
import * as R from "ramda";
import React from "react";
import { IPSCR, KeyOf } from "utils";
import AboutScreen from "../about-screen/AboutScreen";
import HomeScreen from "../home-screen/HomeScreen";
import { nConfig } from "./navigation-utils";

const screenProps = {
  Home: { component: HomeScreen, options: nConfig.noHeader },
  About: { component: AboutScreen },
};
const __PRIMARY = R.keys(screenProps);
export type enum_PrimaryStack = KeyOf<typeof screenProps>;

export const PrimaryStack = withTheme((props: IPSCR) => {
  const Stack = createStackNavigator<typeof screenProps>();
  const {
    theme: { C },
  } = props;

  const screenOptions = {
    ...TransitionPresets.ScaleFromCenterAndroid,
    transitionSpec: {
      open: nConfig.durationSpec,
      close: nConfig.durationSpec,
    },
    headerStyle: {
      elevation: 0,
      backgroundColor: C.background,
      borderWidth: 0,
    },
    headerTitleStyle: {
      //   fontFamily: CIRCULAR_BOLD,
      fontSize: 18,
      color: C.text,
      marginLeft: 30,
      marginRight: 30,
    },

    headerTitleAlign: "center",
    headerLeft: (props) => (
      <HeaderBackButton
        {...props}
        style={{}}
        tintColor={C.primary}
        labelStyle={{ color: "transparent" }}
        // onPress={() => {
        //   // Do something
        // }}
      />
    ),
  };

  const config = {
    ...TransitionPresets.ModalPresentationIOS,
    gestureEnabled: true,
    cardOverlayEnabled: true,
  };

  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      mode="modal"
      screenOptions={config}
    >
      {__PRIMARY.map((screen) => (
        <Stack.Screen name={screen} {...screenProps[screen]} key={screen} />
      ))}
    </Stack.Navigator>
  );
});
