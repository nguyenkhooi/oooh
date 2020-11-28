import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from "@react-navigation/stack";
import { IconOooh } from "assets";
// import { img } from "assets";
import { useAppContext } from "engines";
import * as R from "ramda";
import React from "react";
import { TextStyle } from "react-native";
import { WelcomeScreen } from "screens/welcome-scr/WelcomeScreen";

import { KeyOf } from "utils";
import { presetNavConfig } from "./navigation-utils";

const screenProps = {
  "welcome-scr": {
    component: WelcomeScreen,
    options: { ...presetNavConfig.noHeader, title: "Oooh Storybook" },
  },
  // Project: {
  //   component: ProjectScreen,
  //   options: ({ route }) =>
  //     nConfig.headerTitle({ route, param: "project", key: "title" }),
  // },
};

const __PRIMARY = R.keys(screenProps);
export type enum_WelcomeStack = KeyOf<typeof screenProps>;

export const WelcomeStack = () => {
  const Stack = createStackNavigator<typeof screenProps>();
  const { C } = useAppContext();

  const config: StackNavigationOptions = {
    ...TransitionPresets.ModalPresentationIOS,
    gestureEnabled: true,
    cardOverlayEnabled: true,
    animationEnabled: true,
    headerStyle: {
      elevation: 0,
      backgroundColor: C.background,
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      color: C.text,
    } as TextStyle,
    headerBackImage: () => (
      <IconOooh preset={"safe"} name={"arrow_left"} size={16} color={C.text} />
    ),
  };

  return (
    <Stack.Navigator
      initialRouteName="welcome-scr"
      headerMode="float"
      mode="modal"
      screenOptions={config}
    >
      {__PRIMARY.map((screen) => (
        <Stack.Screen
          name={screen}
          {...screenProps[screen]}
          key={screen}
          // options={screen == "Home" ? screenOptions : screen.options}
        />
      ))}
    </Stack.Navigator>
  );
};
