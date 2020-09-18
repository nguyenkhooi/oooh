import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import * as React from "react";
import { RootNavigation } from "screens";

function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <RootNavigation />
    </ApplicationProvider>
  );
}

export default App;
