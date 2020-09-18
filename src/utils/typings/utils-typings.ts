/* eslint-disable @typescript-eslint/interface-name-prefix */
import { TextStyle } from "react-native";
import { colors } from "utils";

/** TODO 📕 this */
/**
 * @see https://stackoverflow.com/a/49286056
 */
export type ValueOf<T> = T[keyof T];
export type KeyOf<T> = keyof T;
export type PROPS_Colors = typeof colors;
export type ENUM_Palette = ValueOf<PROPS_Colors>;

export type IPtypoCarp = {
  largeTitle: TextStyle;
  headline: TextStyle;
  title: TextStyle;
  titleEmphasized: TextStyle;
  subtitle: TextStyle;
  subtitleEmphasized: TextStyle;
  body: TextStyle;
  bodyEmphasized: TextStyle;
  caption: TextStyle;
  captionEmphasized: TextStyle;
};

/**
 * fr theme
 */
export interface PROPS_HichTheme {
  C: PROPS_Colors;
  dark?: boolean;
}

/**
 * List of theme index
 */
export type ENUM_Theme = "themeLight" | "themeDark"; //* Add more theme index here if wanted
export interface PROPS_ThemeProvider {
  theme: ENUM_Theme;
  setTheme?(theme: ENUM_Theme): void;
  children: React.ReactNode;
}

export type ENUM_FontFamily =
  | "Montserrat-Bold"
  | "Roboto_medium"
  | "Roboto"
  | "System";
