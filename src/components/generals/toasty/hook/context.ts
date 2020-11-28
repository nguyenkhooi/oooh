import React from "react";
import { Toasty } from "../Toasty";

type dToasty = React.RefObject<Toasty>["current"];

const ToastyContext = React.createContext(null as dToasty);

export default ToastyContext;
