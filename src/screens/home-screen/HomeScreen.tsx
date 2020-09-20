import { Text } from "@ui-kitten/components";
import { sstyled } from "components";
// import { moderateScale } from "react-native-size-matters";
import { withTheme } from "engines";
import * as React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { IPSCR, moderateScale, spacing, useDimension } from "utils";
import { Navigation } from "../_navigation/navigation-utils";
import S_Carou from "./S_Carou";
import { S_PortfolioGrid } from "./S_PortfolioGrid";

export default withTheme((props: IPSCR) => {
  const {
    navigation,
    theme: { C },
  } = props;
  // const [C, dark] = useTheme();
  const [width] = useDimension("window");
  return (
    <ScrollView style={{ backgroundColor: C.background }}>
      <$_Intro {...props} />
      <$_PortfolioGrid {...props} />
      <$_Carou {...props} />
    </ScrollView>
  );
});

const $_Intro = (props) => {
  const {
    theme: { C },
  } = props;
  const [width, height] = useDimension("window");
  return (
    <View
      style={{
        height: height,
        justifyContent: "flex-start",
        // alignItems: "center",
        // paddingHorizontal: spacing(3),
        paddingHorizontal: spacing(6),
        paddingTop: height * 0.3,
        // backgroundColor: C.background,
      }}
    >
      <Text category={"h1"}>Hi, I'm Khoi 👋</Text>
      <Text
        category={"s1"}
        style={{ fontSize: 31 }}
        adjustsFontSizeToFit={true}
      >
        As an experienced mobile/web developer and UX manager, I love doing both
        <LinkText> experimental work </LinkText>
        and
        <LinkText> real products. </LinkText>
        See things I follow on my blog or read
        <LinkText onPress={() => Navigation.navigate("About")}>
          {" "}
          a bit{" "}
        </LinkText>
        about me.
      </Text>
    </View>
  );
};

const $_PortfolioGrid = S_PortfolioGrid;

const $_Carou = S_Carou;

const $_HichShow = (props) => {
  return (
    <View>
      <Text category={"h1"}>Hich</Text>
      <Text category={"s1"} style={{ fontSize: 31 }}>
        I'm an experienced mobile/web developer and UX manager in the US and
        Vietnam. I love doing both
      </Text>
    </View>
  );
};

const Layout = sstyled(ScrollView)({
  flex: 1,
  alignItems: "flex-start",
  justifyContent: "center",
  paddingHorizontal: moderateScale(20),
  // backgroundColor: C.background,
});

const LinkText = sstyled(Text)({
  fontSize: 31,
  fontWeight: "500",
  fontStyle: "italic",
});

// export default withTheme(HomeScreen);
