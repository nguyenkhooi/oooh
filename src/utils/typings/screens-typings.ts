import { NavigationInjectedProps } from "react-navigation"
import { PROPS_HichTheme } from "."

export interface IPSCR extends NavigationInjectedProps<{}> {
  theme: PROPS_HichTheme
}
