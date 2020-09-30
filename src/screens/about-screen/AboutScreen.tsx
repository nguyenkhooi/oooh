import { Text } from "@ui-kitten/components";
import { sstyled } from "components";
// import { moderateScale } from "react-native-size-matters";
import { useSheets, withTheme } from "engines";
import * as React from "react";
import { ScrollView } from "react-native";
import { IPSCR, spacing } from "utils";

export default withTheme((props: IPSCR) => {
  const {
    theme: { C },
  } = props;

  const { data } = useSheets(0, "About");

  return (
    <ScrollCTNR {...props}>
      <BodyText {...props} category={"s2"} adjustsFontSizeToFit>
        {!!data[0] && data[0].body}
      </BodyText>
    </ScrollCTNR>
  );
});

const ScrollCTNR = sstyled(ScrollView)(({ theme: { C } }) => ({
  flex: 1,
  // paddingHorizontal: spacing(6),
  paddingTop: spacing(5),
  backgroundColor: C.background01,
}));

const BodyText = sstyled(Text)(({ theme: { C } }) => ({
  color: C.text01,
  fontSize: 20,
  paddingHorizontal: spacing(6),
}));
