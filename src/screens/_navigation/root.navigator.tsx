import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { StackNavigationOptions } from "@react-navigation/stack/lib/typescript/src/types";
import { useAppContext } from "engines";
import * as React from "react";
import { KeyOf } from "utils";
import { dStackedScreenC0, presetNavConfig } from "./navigation-utils";
import { WelcomeStack } from "./welcome.navigator";

const SCR_C0: dStackedScreenC0 = {
  Welcome: {
    component: WelcomeStack,
  },
};
const Stack = createStackNavigator<typeof SCR_C0>();
export type enum_RootStack = KeyOf<typeof SCR_C0>;

export const RootStack = () => {
  const { C } = useAppContext();
  const screenOptions: StackNavigationOptions = {
    ...TransitionPresets.FadeFromBottomAndroid,
    headerStyle: {
      elevation: 0,
      backgroundColor: C.background,
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      //   fontFamily: CIRCULAR_BOLD,
      fontSize: 0,
    },

    headerTitleAlign: "center",
  };
  return (
    <Stack.Navigator
      initialRouteName={"Welcome"}
      headerMode="none"
      screenOptions={screenOptions}
    >
      <Stack.Screen name={"Welcome"} {...SCR_C0["Welcome"]} key={"Welcome"} />
    </Stack.Navigator>
  );
};

/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your PrimaryNavigator) which the user
 * will use once logged in.
 */
export const AppNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  );
});

AppNavigator.displayName = "AppNavigator";
