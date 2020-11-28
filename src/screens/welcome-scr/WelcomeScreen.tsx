import { Buttoon, Ni, Poppy, sstyled, Txt } from "components";
import { useAppContext } from "engines";
import React from "react";
import { View } from "react-native";
import { Navigation } from "screens/_navigation";
import { spacing, THEME, tr } from "utils";

export function WelcomeScreen() {
  const { C, dark, setTheme } = useAppContext();
  return (
    <Ctnr>
      <CtnrWelcome animation="fadeInUp" delay={500}>
        <TxtTitle>{tr("Welcome to")}</TxtTitle>
        <TxtTitle>{tr("Oooh Playbook")}</TxtTitle>
      </CtnrWelcome>
      <CtnrWelcome animation="fadeInUp" delay={1000}>
        <Buttoon
          size="small"
          onLongPress={() => setTheme(dark ? THEME.LIGHT : THEME.DARK)}
          onPress={() => Poppy.show("Hey")}
        >
          {tr("Hi I'm Poppy!")}
        </Buttoon>
      </CtnrWelcome>
    </Ctnr>
  );
}

const Ctnr = sstyled(View)((p) => ({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: p.C.background,
}));
const CtnrWelcome = sstyled(Ni.Layout)(() => ({
  paddingVertical: spacing(4),
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
}));

const TxtTitle = sstyled(Txt.H6)({
  textAlign: "center",
});
