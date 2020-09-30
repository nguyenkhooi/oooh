import { Spinner, Text } from "@ui-kitten/components";
import { withTheme } from "engines";
import * as R from "ramda";
import React, { useState } from "react";
import {
  FlatList,
  ImageStyle,
  ScrollView,
  TextStyle,
  View,
  ViewStyle
} from "react-native";
import * as Animatable from "react-native-animatable";
// import { ScrollView } from "react-native-gesture-handler";
import RNMasonryScroll from "react-native-masonry-scrollview";
import Image from "react-native-scalable-image";
import { dColors, scale, spacing, useDimension } from "utils";

const { createAnimatableComponent } = Animatable;

const AnimatableView = createAnimatableComponent(View);

const ProjectScreen = withTheme((props) => {
  const {
    navigation,
    theme: { C },
    route,
  } = props;
  const [width, height] = useDimension();

  // const imageWidth: number = height * 0.4 - 20;
  const imageWidth: number = width < 1000 ? width * 0.8 : width * 0.3;
  const [screenShown, showScreen] = useState(false);
  const [isHorizontal, setIsHorizontal] = useState(false);

  const toggleHorizontal = () => setIsHorizontal(!isHorizontal);

  const imageProp = isHorizontal
    ? { height: imageWidth }
    : { width: imageWidth };
  const {
    project: { color: projectColor, headline },
  } = route.params;
  const [_contents, setContents] = React.useState([""]);
  const [_index, setIndex] = React.useState(0);

  React.useEffect(function sortContents() {
    const dbContents = [
      route.params.project.body00,
      route.params.project.image00,
      route.params.project.body01,
      route.params.project.image01,
      route.params.project.body02,
      route.params.project.image02,
      route.params.project.body03,
      route.params.project.image03,
      route.params.project.body04,
      route.params.project.image04,
      route.params.project.body05,
      route.params.project.image05,
      route.params.project.body06,
      route.params.project.image06,
      route.params.project.body07,
      route.params.project.image07,
      route.params.project.body08,
      route.params.project.image08,
      route.params.project.body09,
      route.params.project.image09,
    ];
    const newContents = R.reject(
      (content) => !content || content == "",
      dbContents
    );
    setContents(newContents);
    setTimeout(() => {
      showScreen(true);
    }, 1000);
  }, []);

  const refBody = React.useRef<FlatList>(null);

  const RenderContent = (props: { text: string; imageIndex: number }) => {
    const { text, imageIndex } = props;
    const startsWith = R.invoker(1, "startsWith");
    // const isContentImg = startsWith("https://", text);
    const isContentImg = text.includes("https");
    switch (isContentImg) {
      case true:
        return imageIndex == 0 ? (
          <Image
            source={{ uri: text }}
            {...imageProp}
            key={imageIndex}
            style={SS(C).IMG_CTNR}
          />
        ) : (
          <AnimatableView
            animation={isHorizontal ? "fadeInRight" : "fadeInUp"}
            delay={100 * imageIndex}
            style={SS(C).IMG_CTNR}
          >
            <Image source={{ uri: text }} {...imageProp} key={imageIndex} />
          </AnimatableView>
        );
        break;
      case false:
        return (
          <AnimatableView
            animation={isHorizontal ? "fadeInRight" : "fadeInUp"}
            delay={100 * imageIndex}
            style={[
              SS(C).IMG_CTNR,
              {
                backgroundColor: "transparent",
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <Text
              category={"s1"}
              style={{
                fontSize: 25,
                color: "white",
                width: imageWidth,
                textAlign: "center",
              }}
              adjustsFontSizeToFit
              key={imageIndex}
              // numberOfLines={20}
              // ellipsizeMode={"head"}
            >
              {text}
            </Text>
          </AnimatableView>
        );
        break;
    }
  };

  return screenShown ? (
    <ScrollView
      style={{
        backgroundColor: C.background01,

        paddingTop: spacing(5),
      }}
    >
      <Text
        category={"h1"}
        style={{
          fontSize: 26,
          color: "white",
          textAlign: "center",
          justifyContent: "center",
          marginBottom: spacing(1),
          paddingHorizontal: spacing(6),
        }}
        adjustsFontSizeToFit
      >
        {headline}
        {/* {JSON.stringify(_images)} */}
      </Text>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <RNMasonryScroll
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
          columns={width < 1000 ? 1 : 2}
          evenColumnStyle={SS(C).evenColumnStyle}
          oddColumnStyle={
            isHorizontal
              ? SS(C).oddColumnStyleHorizontal
              : SS(C).oddColumnStyleVertical
          }
          horizontal={isHorizontal}
        >
          {_contents.map((image, imageIndex) => {
            return <RenderContent text={image} imageIndex={imageIndex} />;
          })}
        </RNMasonryScroll>
      </View>
    </ScrollView>
  ) : (
    <View
      style={{
        backgroundColor: projectColor,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Spinner size="giant" />
    </View>
  );
});

export default ProjectScreen;

const SS = (C?: dColors) => {
  return {
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      margin: 8,
    } as ViewStyle,

    IMG_CTNR: {
      margin: 10,
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: "silver",
    } as ImageStyle,
    evenColumnStyle: {} as ViewStyle,
    oddColumnStyleVertical: { marginTop: 60 } as ViewStyle,
    oddColumnStyleHorizontal: { marginLeft: 60 } as ViewStyle,

    BODY_CTNR: {
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: spacing(2),
      borderWidth: 1,
      borderColor: "white",
    } as ViewStyle,
    GRID_CTNR: {
      marginTop: 10,
      marginHorizontal: spacing(5),
      //   justifyContent: "center",
      //   alignItems: "center",
      // flex: 1,
    } as ViewStyle,
    ITEM_CTNR: {
      justifyContent: "flex-end",
      borderRadius: 5,
      padding: 10,
      overflow: "hidden",
    } as ImageStyle,
    itemName: {
      fontSize: scale(18),
      color: "#fff",
      fontWeight: "600",
    } as TextStyle,
    itemCode: {
      // fontWeight: "600",
      fontSize: scale(12),
      color: "#fff",
    } as TextStyle,
  };
};
