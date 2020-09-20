import { Text } from "@ui-kitten/components";
import { sstyled } from "components";
// import { moderateScale } from "react-native-size-matters";
import { withTheme } from "engines";
import * as React from "react";
import { View } from "react-native";
import { IPSCR, moderateScale, spacing } from "utils";

export default withTheme((props: IPSCR) => {
  const {
    theme: { C },
  } = props;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingHorizontal: spacing(5),
        backgroundColor: C.background,
      }}
    >
      <Text category={"s2"} style={{ fontSize: 31 }} adjustsFontSizeToFit>
        Khoi Tran is a data analyst, app developer, designer, and visual
        thinker. Believing the future as a result of all past experience, he did
        not settle down on earning a stats degree, but also inspired himself to
        be a developer using his aesthetic aptitude to build appealing and
        useful products. With the principles of simplicity, clarity, and
        structurality, he has coded, designed, and managed various projects
        successfully. This philosophy, along with strict self-discipline, has
        shaped Khoi’s interdisciplinary practice today.
      </Text>
      {/* <Text category={"h1"}>Fact check</Text>
      <Text category={"s2"} style={{ fontSize: moderateScale(20) }}>
        - 🔭 Khoi is currently working on{" "}
        <B>a podcast app that recommend contents for people on-the-go</B>
        {"\n"}- 🌱 Khoi is currently learning <B>brain.js</B>
        {"\n"}- 👯 Khoi is looking to collaborate on any{" "}
        <B>
          JS/Python/React-Native project related to analyzing Heart Rate
          Variability.
        </B>
        {"\n"}- 🤔 Khoi is looking for help with{" "}
        <B>brain.js and all thing machine learning</B>
        {"\n"}- 💬 Ask him about{" "}
        <B>React-Native, design system, and code structure.</B>
        {"\n"}- 📫 How to reach him: [Email](mailto:drkhoi16@gmail.com){"\n"}-
        ⚡ Fun fact: Khoi has a degree in Actuarial Science, and is actively
        pursuing to be an actuary.
      </Text> */}
    </View>
  );
});

const LinkText = sstyled(Text)({
  fontSize: moderateScale(20),
  fontWeight: "500",
  fontStyle: "italic",
});

const B = sstyled(Text)({
  fontSize: moderateScale(18),
  fontWeight: "700",
});
