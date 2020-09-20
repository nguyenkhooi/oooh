import { Text, useTheme } from "@ui-kitten/components";
import { sstyled } from "components";
// import { moderateScale } from "react-native-size-matters";
import { withTheme } from "engines";
import * as React from "react";
import { Dimensions, SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import { IPSCR, moderateScale, useDimension } from "utils";
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
    <ScrollView
      style={{ backgroundColor: C.background }}
      contentContainerStyle={{}}
    >
      <$_Intro {...props} />
      <$_PortfolioGrid {...props} />
      <$_Carou {...props} />
      <$_HichShow {...props} />
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
        height: Dimensions.get("window").height,
        justifyContent: "flex-start",
        // alignItems: "center",
        // paddingHorizontal: spacing[3],
        paddingHorizontal: width * 0.3,
        paddingTop: height * 0.3,
        // backgroundColor: C.background,
      }}
    >
      <Text category={"h1"}>Hi, I'm Khoi 👋</Text>
      <Text category={"s1"} style={{ fontSize: moderateScale(15) }}>
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
      <Text category={"s1"} style={{ fontSize: moderateScale(20) }}>
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
  fontSize: moderateScale(20),
  fontWeight: "500",
  fontStyle: "italic",
});

// export default withTheme(HomeScreen);