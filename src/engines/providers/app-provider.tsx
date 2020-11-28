import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
// import { useDoc } from "engines";
// import {
//   dDocAction,
//   dDocState,
//   DOC_ACTION,
//   dUserDoc
// } from "engines/hooks/useDoc/use-doc.props";
// import firebase from "firebase/app";
// import { auth, db } from "../firebase";
import React, { useContext, useEffect, useState } from "react";
import { colors, dColors, dTheme, THEME, themeDark, themeLight } from "utils";

/** 
 * App Provider,
 * providing `theme`, frbs `userDoc(_)`, and `Kitten's provider`
 * @version 0.11.4
 * - *Add Kitten's provider to simplify `App.tsx`*
 * @author nguyenkhooi
 * ---
 * @example
 *  In `app.tsx`
 *    import {AppProvider} from `engines`
 *    ...
 *    const [_theme,setTheme] = React.useState<eTheme>(`themeLight`)
 *    ...
 *    return (
        <RootStoreProvider value={rootStore}>
          <AppProvider theme={_theme} setTheme={setTheme}> <--- here
            <...>
          </AppProvider> <--- and here
        </RootStoreProvider>
      )
    `To setup theme switcher`
      import {useAppContext} from "engines"
      ...
      const ThemeSwitcherButton = (props) => {
        const {C, dark, setTheme} = useAppContext()
        return (
          <Button onPress={()=> setTheme(dark? `themeLight` : `themeDark`)} >
            {dark? `Switch to Light Theme` : `Switch to Dark Theme`}
          </Button>
        )
      }
 */
export function AppProvider(props: dAppProvider) {
  const { children } = props;
  const [_theme, setTheme] = React.useState<THEME>(THEME.DARK);

  //* ----$-FRBS-USER-SECTION --------------------
  // const [_currentUser, setCurrentUser] = useState<
  //   firebase.User | null | undefined
  // >();

  // useEffect(
  //   /**
  //    *  Check userInfo from frbs
  //    * ---
  //    * -  When app first started, it'll get all current `userInfo` --> _currentUser
  //    *    - `_currentUser.uid` is useful to set path for `userDocState` later on
  //    * -  Check if u has logged in/logged off
  //    */
  //   function handleAuthStatusChange() {
  //     return auth.onAuthStateChanged(setCurrentUser);
  //     // console.log("userInfo existed: ", _frbsAuthe != null)
  //   },
  //   [_currentUser]
  // );

  // const [userDocState, userDocDispatch] = useDoc<dUserDoc>({}); //*<-- empty {} atm; we'll set u doc's path in useEffect(dispatchCurrentUser())

  // useEffect(
  //   /**
  //    * Set path of `userDoc` (which is having no path atm)
  //    * with the correct FRBS's path,
  //    * using uid get from `handleAuthStatusChange(_)`
  //    */
  //   function dispatchCurrentUser() {
  //     if (_currentUser) {
  //       userDocDispatch({
  //         type: DOC_ACTION.CONFIG,
  //         payload: {
  //           path: `_FT_USERS/${_currentUser.uid}`,
  //         },
  //       });
  //       // userDocDispatch({
  //       //   type: DOC_ACTION.CUSTOM,
  //       //   payload: { path: `_FT_USERS/${_currentUser.uid}` },
  //       // });
  //     }
  //   },
  //   [_currentUser]
  // );

  // React.useEffect(
  //   /**
  //    * Base frbs's user doc
  //    * with `userDocState.doc`,
  //    * whose data get from `handleAuthStatusChange(_)`
  //    */
  //   function baseCurrentUser() {
  //     //*----SCENARIOS-SECTION --------------------
  //     let USER_DOC_EXISTED = !!userDocState.doc;
  //     let USER_DOC_X_EXISTED =
  //       !!!userDocState.doc &&
  //       !userDocState.loading &&
  //       userDocState.path &&
  //       _currentUser;
  //     //*-------------------------------

  //     if (USER_DOC_EXISTED) {
  //       /**
  //        * Check if frbs's theme is in eTheme
  //        * - ✅: set app's theme from it
  //        * = ❌: set _theme's initial value
  //        */
  //       Object.values(THEME).includes(userDocState.doc.theme)
  //         ? setTheme(userDocState.doc.theme)
  //         : db.doc(userDocState.path).update({
  //             theme: _theme,
  //           });
  //     }

  //     if (USER_DOC_X_EXISTED) {
  //       const __userFields: KeyOf<dUserDoc["user"]>[] = [
  //         "email",
  //         "displayName",
  //         "photoURL",
  //         "phoneNumber",
  //       ];
  //       const userData: dUserDoc["user"] = __userFields.reduce((acc, curr) => {
  //         if (_currentUser[curr]) {
  //           return { ...acc, [curr]: _currentUser[curr] };
  //         }
  //         return acc;
  //       }, {});
  //       userDocDispatch({
  //         type: DOC_ACTION.UPDATE,
  //         payload: {
  //           tables: {},
  //           favoriteGriiids: [],
  //           user: userData,
  //           theme: THEME.LIGHT,
  //         },
  //       });
  //       // db.doc(userDocState.path).set(
  //       //   {
  //       //     tables: {},
  //       //     favoriteGriiids:
  //       //     user: userData,
  //       //     theme: THEME.LIGHT.toString(),
  //       //   },
  //       //   { merge: true }
  //       // );
  //     }
  //   },
  //   [userDocState]
  // );

  //*----THEME-SECTION --------------------

  const [_colors, setColors] = React.useState(
    _theme == THEME.DARK ? themeDark : themeLight
  );
  const [_dark, setDark] = React.useState(_theme === THEME.DARK ? true : false);

  React.useEffect(
    function setupTheme() {
      switch (_theme) {
        case THEME.LIGHT:
          setColors(themeLight);
          setDark(false);
          // storage.save("@app_preferences", { theme: "themeLight" });
          // AsyncStorage.setItem("@preferences", JSON.stringify({ theme: "themeLight" }))
          break;
        case THEME.DARK:
          setColors(themeDark);
          setDark(true);
          // AsyncStorage.setItem("@preferences", JSON.stringify({ theme: "themeDark" }))
          break;
        default:
          setColors(themeLight);
          setDark(false);
          // AsyncStorage.setItem("@preferences", JSON.stringify({ theme: "themeLight" }))
          break;
      }
      console.log("💋 Current theme: ", _theme.toString());
      // setTimeout(() => {
      //   //* Base theme value to frbs
      //   userDocState?.path &&
      //     _theme !== userDocState?.doc?.theme &&
      //     db.doc(userDocState.path).update({
      //       theme: _theme,
      //     });
      // }, 1000);
    },
    [_theme]
  );
  //*------------------------------

  return (
    <AppContext.Provider
      value={{
        // userDoc: { state: userDocState, dispatch: userDocDispatch },
        // currentUser: _currentUser,
        C: _colors,
        dark: _dark,
        setTheme: setTheme,
      }}
    >
      <ApplicationProvider
        {...eva}
        theme={_theme == THEME.LIGHT ? themeLight : themeDark}
      >
        {children}
      </ApplicationProvider>
    </AppContext.Provider>
  );
}

export const AppContext = React.createContext<dAppContext>({
  // currentUser: undefined,
  // userDoc: undefined,
  C: colors,
  dark: false,
  setTheme: () => {},
});

/**
 * App context hook
 *
 * ---
 * @example
 * ```
 * const { C, dark, setTheme } = useAppContext()
 * ```
 *
 * @version 0.10.19
 * @author nguyenkhooi
 */
export const useAppContext = () => useContext(AppContext);

interface dAppProvider {
  children: React.ReactNode;
}

interface dAppContext {
  // currentUser: firebase.User | null | undefined;
  // userDoc: dUser;
  C: dColors;
  dark: boolean;
  setTheme(name: THEME): void;
}
/**
 *
 */
// interface dUser {
//   dispatch: React.Dispatch<dDocAction<dUserDoc>>;
//   state: dDocState<dUserDoc>;
// }
