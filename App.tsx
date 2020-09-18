import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import * as React from "react";
import {
  AppNavigator,
  canExit,
  Navigation,
  setRootNavigation,
  useBackButtonHandler,
  useNavigationPersistence,
} from "screens";
import { ThemeProvider } from "engines";
import { ENUM_Theme, themeDark, themeLight } from "utils";
import { NavigationContainerRef } from "@react-navigation/native";

function App() {
  const [_theme, setTheme] = React.useState<ENUM_Theme>("themeLight");
  const navigationRef = React.useRef<NavigationContainerRef>();

  setRootNavigation(navigationRef);
  useBackButtonHandler(navigationRef, canExit);
  const {
    initialNavigationState,
    onNavigationStateChange,
  } = useNavigationPersistence();
  return (
    <ThemeProvider theme={_theme} setTheme={setTheme}>
      <ApplicationProvider
        {...eva}
        theme={_theme == "themeLight" ? themeLight : themeDark}
      >
        <AppNavigator
          ref={navigationRef}
          initialState={initialNavigationState}
          onStateChange={onNavigationStateChange}
        />
      </ApplicationProvider>
    </ThemeProvider>
  );
}

export default App;
