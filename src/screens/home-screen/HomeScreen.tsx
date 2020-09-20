import { Text } from "@ui-kitten/components";
import { sstyled } from "components";
import { withTheme } from "engines";
import * as React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Navigation } from "screens";
import { IPSCR, IS_WEB, spacing, useDimension } from "utils";
import { S_PortfolioGrid } from "./S_PortfolioGrid";

export default withTheme((props: IPSCR) => {
  const {
    theme: { C },
  } = props;
  const scrollRef = React.useRef<ScrollView>();
  // const [C, dark] = useTheme();
  const [width, height] = useDimension("window");

  let sectionsPos: number[] = [];
  function scrollToIndex(n: number) {
    if (sectionsPos.length > n) {
      const targeted_y = sectionsPos
        .slice(0, n)
        .reduce((total, element) => total + element);

      scrollRef.current.scrollTo({
        x: 0,
        y: targeted_y,
        animated: true,
      });
    } else {
      alert("Out of Max Index");
    }
  }
  const S_Home = [
    {
      component: (
        <$_Intro
          {...props}
          scrollToWork={() => {
            scrollToIndex(1);
          }}
        />
      ),
    },
    {
      component: <$_PortfolioGrid {...props} />,
    },
    {
      component: <$_PortfolioGrid {...props} />,
    },
  ];

  // const [arr, setArr] = React.useState([]);

  return (
    <ScrollView
      ref={scrollRef}
      style={{ backgroundColor: C.background }}
      pagingEnabled={IS_WEB ? true : false}
    >
      {S_Home.map((section, key) => (
        <View
          key={key}
          onLayout={(event) => {
            const layout = event.nativeEvent.layout;
            sectionsPos[key] = layout.height;
          }}
        >
          {section.component}
          <Text>{key}</Text>
        </View>
      ))}
    </ScrollView>
  );
});

interface d$_Intro extends IPSCR {
  scrollToWork(): void;
}
const $_Intro = (props: d$_Intro) => {
  const {
    theme: { C },
    scrollToWork,
  } = props;
  const [width, height] = useDimension("window");
  return (
    <View
      style={{
        height: height,
        justifyContent: "flex-start",
        paddingHorizontal: spacing(6),
        paddingTop: height * 0.3,
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
        <LinkText onPress={scrollToWork}> real products. </LinkText>
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

const LinkText = sstyled(Text)({
  fontSize: 31,
  fontWeight: "600",
  fontStyle: "italic",
});

// export default withTheme(HomeScreen);
