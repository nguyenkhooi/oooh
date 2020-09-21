import { Text } from "@ui-kitten/components";
import { sstyled, TouchableWeb } from "components";
import { withTheme } from "engines";
import * as React from "react";
import { Image, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Navigation } from "screens";
import { img } from "assets";
import { IPSCR, spacing, useDimension } from "utils";
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
    scrollRef.current.scrollTo({ x: 0, y: height * n, animated: true });
    //* deprecated due to inconsistent sectionsPos[] change due to dimensions' change
    // if (sectionsPos.length > n) {
    //   const targeted_y = sectionsPos
    //     .slice(0, n)
    //     .reduce((total, element) => total + element);

    //   scrollRef.current.scrollTo({
    //     x: 0,
    //     y: targeted_y,
    //     animated: true,
    //   });
    // } else {
    //   alert("Out of Max Index");
    // }
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
  ];

  // const [arr, setArr] = React.useState([]);

  return (
    <ScrollView
      ref={scrollRef}
      style={{ backgroundColor: C.background }}
      // pagingEnabled={IS_WEB ? true : false}
    >
      {S_Home.map((section, key) => (
        <View
          key={key}
          onLayout={(event) => {
            const layout = event.nativeEvent.layout;
            sectionsPos[key] = layout.height;
            // alert(layout.height);
          }}
        >
          {section.component}
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
  const [_color, setColor] = React.useState(C.text);
  return (
    <View
      style={{
        height: height,
        justifyContent: "center",
        paddingHorizontal: spacing(6),
        // paddingTop: spacing(7, "v"),
      }}
    >
      <TouchableWeb
        onMouseEnter={(e) => {
          setColor(C.dim);
        }}
        onMouseLeave={(e) => {
          setColor(C.text);
        }}
      >
        {_color == C.dim && (
          <Image
            source={{ uri: img.khoi_1 }}
            style={{ width: 200, height: 200, borderRadius: 200 }}
          ></Image>
        )}

        <Text category={"h1"}>Hi, I'm Khoi 👋</Text>
        <Text
          category={"s1"}
          style={[{ fontSize: 31 }, { color: _color }]}
          adjustsFontSizeToFit={true}
        >
          A young mobile developer and UX manager who love doing both
          <LinkText> experimental work </LinkText>
          and
          <LinkText onPress={scrollToWork}> real products. </LinkText>
          {"\n"}See things I follow on my blog or read
          <LinkText onPress={() => Navigation.navigate("About")}>
            {" "}
            a bit{" "}
          </LinkText>
          about me.
        </Text>
      </TouchableWeb>
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
