import { Component } from "react";
import { ToastOptions, ToastProps } from "./toast";
export interface Props extends ToastOptions {
    offset?: number;
    placement: "top" | "bottom";
}
interface State {
    toasts: Array<ToastProps>;
}
declare class Toasty extends Component<Props, State> {
    constructor(props: Props);
    static defaultProps: {
        placement: string;
        offset: number;
    };
    show: (message: string | JSX.Element, toastOptions?: ToastOptions | undefined) => string;
    update: (id: string, message: string | JSX.Element, toastOptions?: ToastOptions | undefined) => void;
    hide: (id: string) => void;
    render(): JSX.Element;
}
export default Toasty;
