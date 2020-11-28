import { Buttoon, Ni, Toasty, sstyled, Txt } from "components";
import { useAppContext } from "engines";
import React from "react";
import { View } from "react-native";
import { spacing, THEME } from "utils";

export function WelcomeScreen() {
  const { dark, setTheme } = useAppContext();

  return (
    <Ctnr>
      <CtnrWelcome animation="fadeInUp" delay={500}>
        <TxtTitle>{"Welcome to"}</TxtTitle>
        <TxtTitle>{"Oooh Playbook"}</TxtTitle>
      </CtnrWelcome>
      <CtnrWelcome animation="fadeInUp" delay={1000}>
        <Buttoon
          size="small"
          onLongPress={() => setTheme(dark ? THEME.LIGHT : THEME.DARK)}
          onPress={() => {
            const __toasty = Toasty.show("On the way...", { type: "loading" });

            setTimeout(() => {
              !!__toasty &&
                Toasty.update(__toasty, "Done!", {
                  type: "success",
                  icon: Toasty.icon.success,
                });
            }, 1000);
          }}
        >
          {"Hi I'm Toasty!"}
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
