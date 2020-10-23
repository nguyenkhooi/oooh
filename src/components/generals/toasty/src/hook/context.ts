import React from "react";

type Toast = React.RefObject<import("../Toasty").default>["current"];

export const ToastyContext = React.createContext(null as Toast);

// export default ToastyContext;
