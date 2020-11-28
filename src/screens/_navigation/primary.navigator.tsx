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
import { GridBuilderScreen } from "screens/grid-builder-scr";
import { GridScreen } from "screens/grid-scr/GridScreen";
import { S_UserCorner } from "screens/home-scr/s-user-corner";
import { PoppySheet } from "screens/poppy-sh/PoppySheet";
import { TestScreen } from "screens/test-scr/TestScreen";
import { KeyOf } from "utils";
import { HomeScreen } from "../home-scr/HomeScreen";
import { UserScreen } from "../user-scr/UserScreen";
import { dStackedScreenC0, presetNavConfig } from "./navigation-utils";

/**
 * Screen Collection
 */
const SCR_C0: dStackedScreenC0 = {
  "home-scr": {
    // component: HomeScreen,
    component: TestScreen,
    options: {
      title: "Kreme Dashboard",
      headerRight: () => <S_UserCorner />,
    },
  },
  "builder-scr": {
    component: GridBuilderScreen,
    options: {
      title: "Create a table",
      ...presetNavConfig.noHeader,
      cardStyle: { backgroundColor: "transparent" },
    },
  },
  "grid-scr": {
    component: GridScreen,
    // options: ({ route }) =>
    //   presetNavConfig.headerTitle({ route, param: "title" }),
  },
  "user-scr": {
    component: UserScreen,
    options: {
      title: "Profile",
      ...presetNavConfig.noHeader,
      cardStyle: { backgroundColor: "transparent" },
    },
  },
  "poppy-sh": {
    component: PoppySheet,
    options: {
      title: "",
      ...presetNavConfig.noHeader,
      cardStyle: { backgroundColor: "transparent" },
    },
  },
};

const __PRIMARY = R.keys(SCR_C0);
export type enum_PrimaryStack = KeyOf<typeof SCR_C0>;

export const PrimaryStack = () => {
  const Stack = createStackNavigator<typeof SCR_C0>();
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
      // initialRouteName="home-scr"
      initialRouteName="grid-scr"
      headerMode="float"
      mode="modal"
      screenOptions={config}
    >
      {__PRIMARY.map((screen) => (
        <Stack.Screen
          name={screen}
          {...SCR_C0[screen]}
          key={screen}
          // options={screen == "Home" ? screenOptions : screen.options}
        />
      ))}
    </Stack.Navigator>
  );
};
