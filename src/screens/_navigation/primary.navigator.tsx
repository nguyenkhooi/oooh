import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets
} from "@react-navigation/stack";
import { Text, Toggle } from "@ui-kitten/components";
import { img } from "assets";
import { withTheme } from "engines";
import * as R from "ramda";
import React from "react";
import { Image, View } from "react-native";
import ProjectScreen from "screens/project-screen/ProjectScreen";
import { IPSCR, KeyOf, spacing } from "utils";
import AboutScreen from "../about-screen/AboutScreen";
import HomeScreen from "../home-screen/HomeScreen";
import { nConfig } from "./navigation-utils";

const screenProps = {
  Home: {
    component: HomeScreen,
    options: nConfig.noHeader,
  },
  About: { component: AboutScreen },
  Project: {
    component: ProjectScreen,
    options: ({ route }) =>
      nConfig.headerTitle({ route, param: "project", key: "title" }),
  },
};

const __PRIMARY = R.keys(screenProps);
export type enum_PrimaryStack = KeyOf<typeof screenProps>;

export const PrimaryStack = withTheme((props: IPSCR) => {
  const Stack = createStackNavigator<typeof screenProps>();
  const {
    theme: { C, dark },
    setTheme,
  } = props;

  const screenOptions: StackNavigationOptions = {
    headerStyle: {
      elevation: 0,
      backgroundColor: C.background,
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      //   fontFamily: CIRCULAR_BOLD,
      fontSize: 0,
    },
    headerBackImage: (props) => (
      <Image source={img.x} style={{ width: 20, height: 20 }} />
    ),
    headerTitleAlign: "center",
    headerRight: (props) => (
      <View style={{ paddingHorizontal: spacing(3) }}>
        <Toggle
          checked={dark}
          onChange={() => setTheme(dark ? "themeLight" : "themeDark")}
        >
          <Text category={"h6"}>{dark ? "🌒" : "🌞"}</Text>
        </Toggle>
      </View>
    ),
  };

  const config: StackNavigationOptions = {
    ...TransitionPresets.ModalPresentationIOS,
    gestureEnabled: true,
    cardOverlayEnabled: true,
    animationEnabled: true,
    headerBackImage: (props) => (
      <Image
        source={img.x}
        style={{ marginLeft: spacing(2), width: 14, height: 14 }}
      />
    ),
  };

  return (
    <Stack.Navigator
      initialRouteName="Home"
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
});
