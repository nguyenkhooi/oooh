import { Text } from "@ui-kitten/components";
import { sstyled, TouchableWeb } from "components";
import { withTheme } from "engines";
import * as React from "react";
import { Image, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Navigation } from "screens";
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
            source={{
              uri:
                "https://lh3.googleusercontent.com/xmgsDvCYwV-4ol_ykojsIcepRMdNdodE0LsPqPHtKY7SwVpGEJAMmkdBpfkK7LaLKV5VaFwPICLCukP8GTyKomk6rj0wYJzOb9aKMYjUAiUrm7GIuWPH00CQ5g1QJRAADRuu6VvqSDOdW7JDQ7-JLjAuo89s9gNZMmKvZ4VRlYgf4zISDsWKkP8A1_OMR_t4ZAFRsbKai19Rmwuw8BCh50xaJTVeqemQK3hPi2MG9Sooc21BgmFf72f2ACKJCTcnX60Ry6vmcaSWXBXyq4SJU8oLOGUgG_4SoCe7xT3n7b6oyR156nR4wy2v6aEwzne8RSM0Y0Jf1yRF9_0nPTTaQc1wVPcDwVDSlJ8GadvInE86pr4KvZVtQEfNpFci4D987RkFqrlIyanRsCpi64Fk559Zf5cR9wTN1P47qtvxJr8ICoJPE4wRRt6TtjHPMr45Kf7FLHQpHew1DGjIFgnxOle1aouNhntE3xMi3YlTaGT5qK1onr7WWsDnVqeIbEf8oifOMkcT8UW0NsldVO29XJpGipfk_WU3H7AvpZCjkOGUMxQP3ZJf3WpiC2V8xs5IbB_2sLI_7YzlnCtc_TcUjSz8W8iEf8TvEGIRv6xmvfNnBLiI8jIu60jS3zlnRfuQuPNfc9XQzdwqfFNQz8txL2pceNhiC5P33p7kHxoljiCHVbJHA8eG7NQFZSxQBQ=s979-no?authuser=0",
            }}
            style={{ width: 200, height: 200, borderRadius: 200 }}
          ></Image>
        )}

        <Text category={"h1"}>Hi, I'm Khoi 👋</Text>
        <Text
          category={"s1"}
          style={[{ fontSize: 31 }, { color: _color }]}
          adjustsFontSizeToFit={true}
        >
          A young mobile/web developer and UX manager who love doing both
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
