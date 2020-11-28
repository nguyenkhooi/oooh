import { useAppContext } from "engines";
import React, { ReactNode } from "react";
import { dColors, dDimension, useDimension } from "utils";

/**
 * "Super" styled component. 
 * Mimicking `styled-components`, 
 * with RN props (and Typescript),
 * now including dynamic dimension for rn-web
 * ---
 * 
 * @example
 * ```
 * const RoundedButton = sstyled(Button)((p)=> {
    borderRadius: p.ms(10),
    backgroundColor: p.C.primary,
    });
  ```
 * ---
 * @version 1.10.20
 * - *Add dynamic dimension support - `useDimension()`*
 * - *Clean up*
 * @author nguyenkhooi
 */
export function sstyled<Component extends React.ElementType>(
  GivenComp: Component
) {
  /**
   * Props of GivenComp will be combined with CustomProps
   * to create TargetedCompStyle
   */
  return (
    style: dTargetedCompStyle<Component, Props>
  ): React.FC<React.ComponentProps<typeof GivenComp>> => {
    /**
     * Return targeted component
     */
    return function TargetedComp(props) {
      const dim = useDimension();
      const { C } = useAppContext();
      return React.createElement(GivenComp, {
        ...props,
        ...dim,
        style: {
          ...(typeof style === "function"
            ? //@ts-ignore
              style({ ...props, ...dim, C })
            : style),
          ...props.style,
        },
      });
    };
  };
}

interface Props extends dDimension {
  children: ReactNode | Element;
  C: dColors;
}

//@ts-ignore
type dTargetedComp<C, P> = React.ComponentProps<C> & P;
type dTargetedCompStyle<C, P> =
  //@ts-ignore
  | (React.ComponentProps<C> & P)
  //@ts-ignore
  | React.ComponentProps<C>["style"]
  //@ts-ignore
  | ((props: dTargetedComp<C, P>) => React.ComponentProps<C>["style"]);

/**
 * Ideally, sstyled() component will inherit screen props,
 * so if we have universal screen props, extend dSstyled with it
 */
