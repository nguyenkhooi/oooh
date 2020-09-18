import { PROPS_Colors, PROPS_HichTheme } from ".";

export interface PROPSCOMP {
  testID?: string;
  theme?: {
    C: PROPS_Colors;
    dark?: boolean;
  };
}
