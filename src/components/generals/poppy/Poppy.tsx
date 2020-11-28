import { IconKreme } from "assets";
import React, { Component } from "react";
import {
  ActivityIndicator,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ViewStyle
} from "react-native";
import {
  dPoppy,
  dPoppyOptions,
  PoppyActions,
  PoppyContent,
  PoppyItem,
  PoppyScrollArea,
  PoppyTitle
} from "./poppy-item";

const dims = Dimensions.get("window");

export interface Props extends dPoppyOptions {
  offset?: number;
  placement: "top" | "bottom";
}

interface State {
  toasts: Array<dPoppy>;
}

export class Poppy extends Component<Props, State> {
  static Content: () => JSX.Element;
  static Actions: () => JSX.Element;
  static Title: () => JSX.Element;
  static ScrollArea: () => JSX.Element;
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

  refPoppy = React.createRef<Poppy>();

  static _ref: null | Poppy = null;

  static setRef(ref: null | Poppy = null) {
    this._ref = ref;
  }

  static getRef() {
    return this._ref;
  }

  static clearRef() {
    this._ref = null;
  }

  static show(message: string, p_: dPoppyOptions) {
    let id = this._ref?.show(message, p_);
    return id;
  }

  static update(id: string, message: string, p_: dPoppyOptions) {
    this._ref?.update(id, message, p_);
  }

  static icon = {
    success: (
      <IconKreme preset={"safe"} name={"check"} size={12} color={"white"} />
    ),
    danger: <IconKreme preset={"safe"} name={"x"} size={12} color={"white"} />,
    warning: (
      <IconKreme
        preset={"safe"}
        name={"exclamation_circle"}
        size={12}
        color={"white"}
      />
    ),
    normal: (
      <IconKreme preset={"safe"} name={"check"} size={12} color={"white"} />
    ),
    loading: <ActivityIndicator size="small" color="white" />,
  };

  show = (message: string | JSX.Element, toastOptions?: dPoppyOptions) => {
    let id = Math.random().toString();
    const onClose = () => this.hide(id);

    requestAnimationFrame(() => {
      this.setState({ toasts: this.state.toasts.filter((t) => t.id !== id) });
      this.setState({
        toasts: [
          {
            id,
            onClose,
            message,
            ...toastOptions,
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
    toastOptions?: dPoppyOptions
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
          <PoppyItem key={toast.id} {...this.props} {...toast} />
        ))}
      </KeyboardAvoidingView>
    );
  }
}

// @component ./DialogContent.tsx
Poppy.Content = PoppyContent;
// @component ./PoppyActions.tsx
Poppy.Actions = PoppyActions;
// @component ./PoppyTitle.tsx
Poppy.Title = PoppyTitle;
// @component ./PoppyScrollArea.tsx
Poppy.ScrollArea = PoppyScrollArea;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    position: "absolute",
    maxWidth: dims.width * 10 * 9,
    bottom: 1000,
    justifyContent: "flex-start",
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
