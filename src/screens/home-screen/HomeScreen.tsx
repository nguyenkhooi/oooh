import { Button, Text } from "@ui-kitten/components";
import * as React from "react";
import { View } from "react-native";
// import { moderateScale } from "react-native-size-matters";
import { withTheme } from "engines";
import { IPSCR, moderateScale } from "utils";
import { sstyled } from "components";
import { Navigation } from "../_navigation/navigation-utils";

export default withTheme((props: IPSCR) => {
  const {
    navigation,
    theme: { C },
  } = props;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingHorizontal: moderateScale(20),
        backgroundColor: C.background,
      }}
    >
      <Text category={"h1"}>Hi, my name is Khoi 👋</Text>
      <Text category={"s1"} style={{ fontSize: moderateScale(20) }}>
        I'm an experienced mobile/web developer and UX manager in the US and
        Vietnam. I love doing both
        <Button appearance="ghost">
          <LinkText>experimental work</LinkText>
        </Button>
        and
        <Button appearance="ghost">
          <LinkText>real products.</LinkText>
        </Button>
        See things I follow on my blog or read
        <Button appearance="ghost" onPress={() => Navigation.navigate("About")}>
          <LinkText>a bit</LinkText>
        </Button>
        about me.
      </Text>
    </View>
  );
});

const LinkText = sstyled(Text)({
  fontSize: moderateScale(20),
  fontWeight: "500",
  fontStyle: "italic",
});

// export default withTheme(HomeScreen);
