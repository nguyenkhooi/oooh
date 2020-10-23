function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from "react";
import { Dimensions, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import Toast from "./toast";
const dims = Dimensions.get("window");

class Toasty extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "show", (message, toastOptions) => {
      let id = Math.random().toString();

      const onClose = () => this.hide(id);

      requestAnimationFrame(() => {
        this.setState({
          toasts: this.state.toasts.filter(t => t.id !== id)
        });
        this.setState({
          toasts: [{
            id,
            onClose,
            message,
            ...toastOptions
          }, ...this.state.toasts]
        });
      });
      return id;
    });

    _defineProperty(this, "update", (id, message, toastOptions) => {
      this.setState({
        toasts: this.state.toasts.map(toast => toast.id === id ? { ...toast,
          message,
          ...toastOptions
        } : toast)
      });
    });

    _defineProperty(this, "hide", id => {
      this.setState({
        toasts: this.state.toasts.filter(t => t.id !== id)
      });
    });

    this.state = {
      toasts: []
    };
  }

  render() {
    const {
      toasts
    } = this.state;
    let {
      placement,
      offset
    } = this.props;
    let style = {
      bottom: placement === "bottom" ? offset : undefined,
      top: placement === "top" ? offset : undefined,
      justifyContent: placement === "bottom" ? "flex-end" : "flex-start",
      flexDirection: placement === "bottom" ? "column" : "column-reverse"
    };
    return /*#__PURE__*/React.createElement(KeyboardAvoidingView, {
      behavior: Platform.OS === "ios" ? "position" : undefined,
      style: [styles.container, style],
      pointerEvents: "box-none"
    }, toasts.map(toast => /*#__PURE__*/React.createElement(Toast, _extends({
      key: toast.id
    }, this.props, toast))));
  }

}

_defineProperty(Toasty, "defaultProps", {
  placement: "bottom",
  offset: 60
});

const styles = StyleSheet.create({
  container: {
    flex: 0,
    position: "absolute",
    maxWidth: dims.width * 10 * 9,
    bottom: 100,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 5,
    zIndex: 999,
    left: "10%",
    right: "10%"
  },
  message: {
    color: "#333"
  }
});
export default Toasty;
//# sourceMappingURL=toast-container.js.map