import React from "react";
import StorybookPage from "./storybook";
import { Toasty } from "components";
import { AppProvider } from "engines";
import {
  AppNavigator,
  canExit,
  setRootNavigation,
  useBackButtonHandler,
  useNavigationPersistence,
} from "screens";
import { NavigationContainerRef } from "@react-navigation/native";

function PureApp() {
  //* ----RNAV-SECTION -------------------------------
  const navigationRef = React.useRef<NavigationContainerRef>();
  setRootNavigation(navigationRef);
  useBackButtonHandler(navigationRef, canExit);
  const {
    initialNavigationState,
    onNavigationStateChange,
  } = useNavigationPersistence();

  //* ----I18N-SECTION -------------------------------
  // React.useEffect(function getI18n() {
  //   SplashScreen.preventAutoHideAsync();
  //   fetchi18n().then((r) => r.code == "I18N_DONE" && shouldReady(true));
  // }, []);
  return (
    <AppProvider>
      <AppNavigator
        ref={navigationRef}
        initialState={initialNavigationState}
        onStateChange={onNavigationStateChange}
      />
      <Toasty ref={(r) => Toasty.setRef(r)} />
    </AppProvider>
  );
}

let SHOW_STORYBOOK = false;
const App = SHOW_STORYBOOK ? StorybookPage : PureApp;

export default App;
