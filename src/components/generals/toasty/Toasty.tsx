import { IconOooh } from "assets";
import React, { Component } from "react";
import {
  ActivityIndicator,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { ToastyItem } from "./toasty-item";
import { dToastyOptions, Props, State } from "./toasty.props";

const dims = Dimensions.get("window");

/**
 * A Toast component for react-native,
 * supports Android, IOS, Web, Windows
 *
 * ---
 * @example
 *
 * //* In `App.tsx`, add:
 * <Toasty ref={(ref) => Toasty.setRef(ref)} />
 * 
 * //* Simple case
 * <Text onPress={()=>
 *  Toasty.show("Hello mf",
 *  { type: "success" })
 * }>
 *  Toast!
 * </Text>
 *
 * //* Loading case
 * <Text onPress={() => {
 *  const __toasty = Toasty.show("On the way...", { type: "loading" });
 *  setTimeout(() => {
 *   !!__toasty &&
 *     Toasty.update(__toasty, "Done!", {
 *     type: "success",
 *     icon: Toasty.icon.success,
 *    });
 *   }, 1000);
 *  }}>Fetch!
 * </Text>
 *

 * ---
 * @version 0.11.28
 * -  *Add to @oooh*
 *
 * @author nguyenkhooi
 * @see https://github.com/arnnis/react-native-fast-toast
 */
export class Toasty extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      toasts: [],
    };
  }

  static defaultProps = {
    placement: "bottom",
    offset: 60,
  };

  refToasty = React.createRef<Toasty>();

  static _ref: null | Toasty = null;

  static setRef(ref: null | Toasty = null) {
    this._ref = ref;
  }

  static getRef() {
    return this._ref;
  }

  static clearRef() {
    this._ref = null;
  }

  static show(message: string, p_: dToastyOptions) {
    let id = this._ref?.show(message, p_);
    return id;
  }

  static update(id: string, message: string, p_: dToastyOptions) {
    this._ref?.update(id, message, p_);
  }

  static icon = {
    success: (
      <IconOooh preset={"default"} name={"check"} size={14} color={"white"} />
    ),
    danger: (
      <IconOooh preset={"default"} name={"x"} size={14} color={"white"} />
    ),
    warning: (
      <IconOooh
        preset={"default"}
        name={"exclamation_circle"}
        size={14}
        color={"white"}
      />
    ),
    normal: (
      <IconOooh preset={"default"} name={"check"} size={14} color={"white"} />
    ),
    loading: <ActivityIndicator size="small" color="white" />,
  };

  show = (message: string | JSX.Element, toastOptions?: dToastyOptions) => {
    let id = Math.random().toString();
    const onClose = () => this.hide(id);
    const icon =
      toastOptions.type === "loading" ? (
        <ActivityIndicator color="white" />
      ) : (
        toastOptions.icon
      );
    const options: dToastyOptions = { ...toastOptions, icon };
    requestAnimationFrame(() => {
      this.setState({ toasts: this.state.toasts.filter((t) => t.id !== id) });
      this.setState({
        toasts: [
          {
            id,
            onClose,
            message,
            ...options,
          },
          ...this.state.toasts,
        ],
      });
    });

    return id;
  };

  update = (
    id: string,
    message: string | JSX.Element,
    toastOptions?: dToastyOptions
  ) => {
    this.setState({
      toasts: this.state.toasts.map((toast) =>
        toast.id === id ? { ...toast, message, ...toastOptions } : toast
      ),
    });
  };

  hide = (id: string) => {
    this.setState({ toasts: this.state.toasts.filter((t) => t.id !== id) });
  };

  render() {
    const { toasts } = this.state;
    let { placement = "bottom", offset = dims.height * 0.5 } = this.props;

    let style: ViewStyle = {
      bottom: placement === "bottom" ? offset : undefined,
      top: placement === "top" ? offset : undefined,
      justifyContent: placement === "bottom" ? "flex-end" : "flex-start",
      flexDirection: placement === "bottom" ? "column" : "column-reverse",
    };

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : undefined}
        style={[styles.container, style]}
        pointerEvents="box-none"
      >
        {toasts.map((toast) => (
          <ToastyItem key={toast.id} {...this.props} {...toast} />
        ))}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    position: "absolute",
    maxWidth: dims.width * 10 * 9,
    bottom: 1000,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    zIndex: 999,
    left: "10%",
    right: "10%",
  },
  message: {
    color: "#333",
  },
});

// export default ToastContainer;
