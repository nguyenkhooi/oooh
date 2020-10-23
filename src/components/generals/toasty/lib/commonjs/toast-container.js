"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _toast = _interopRequireDefault(require("./toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const dims = _reactNative.Dimensions.get("window");

class Toasty extends _react.Component {
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
    return /*#__PURE__*/_react.default.createElement(_reactNative.KeyboardAvoidingView, {
      behavior: _reactNative.Platform.OS === "ios" ? "position" : undefined,
      style: [styles.container, style],
      pointerEvents: "box-none"
    }, toasts.map(toast => /*#__PURE__*/_react.default.createElement(_toast.default, _extends({
      key: toast.id
    }, this.props, toast))));
  }

}

_defineProperty(Toasty, "defaultProps", {
  placement: "bottom",
  offset: 60
});

const styles = _reactNative.StyleSheet.create({
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

var _default = Toasty;
exports.default = _default;
//# sourceMappingURL=toast-container.js.map