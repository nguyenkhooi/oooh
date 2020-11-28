import React, { FC, useEffect, useRef, useState } from "react";
import { Poppy, Props } from "../Poppy";
import PoppyContext from "./context";

export const PoppyProvider: FC<Props> = ({ children, ...props }) => {
  const toastRef = useRef(null);
  const [refState, setRefState] = useState(null);

  useEffect(() => {
    setRefState(toastRef.current);
  }, []);

  return (
    <PoppyContext.Provider value={refState}>
      {children}
      <Poppy ref={toastRef} {...props} />
    </PoppyContext.Provider>
  );
};

// export default PoppyProvider;
