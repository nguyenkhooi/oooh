import React from "react";

type dPoppy = React.RefObject<Poppy>["current"];

const PoppyContext = React.createContext(null as dPoppy);

export default PoppyContext;
