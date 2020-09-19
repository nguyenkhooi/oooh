import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Carousel, { getInputRangeFromIndexes } from "react-native-snap-carousel"; // Version can be specified in package.json

const SLIDER_WIDTH = Dimensions.get("screen").width * 0.8;
const TRANSLATE_VALUE = Math.round((SLIDER_WIDTH * 0.3) / 4);

export function scrollInterpolator(index, carouselProps) {
  const range = [1, 0, -1];
  const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
  const outputRange = range;

  return { inputRange, outputRange };
}
export function animatedStyles(index, animatedValue, carouselProps) {
  const translateProp = carouselProps.vertical ? "translateY" : "translateX";
  let animatedOpacity = {};
  let animatedTransform = {};

  if (carouselProps.inactiveSlideOpacity < 1) {
    animatedOpacity = {
      opacity: animatedValue.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [
          carouselProps.inactiveSlideOpacity,
          1,
          carouselProps.inactiveSlideOpacity,
        ],
      }),
    };
  }

  if (carouselProps.inactiveSlideScale < 1) {
    animatedTransform = {
      transform: [
        {
          scale: animatedValue.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [
              carouselProps.inactiveSlideScale,
              1,
              carouselProps.inactiveSlideScale,
            ],
          }),
          [translateProp]: animatedValue.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [
              TRANSLATE_VALUE * carouselProps.inactiveSlideScale,
              0,
              -TRANSLATE_VALUE * carouselProps.inactiveSlideScale,
            ],
          }),
        },
      ],
    };
  }

  return {
    ...animatedOpacity,
    ...animatedTransform,
  };
}

const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 0.4);

const DATA = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i);
}

export default function S_Carou() {
  const [index, setIndex] = React.useState(0);

  function _renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>{"Carou"}</Text>
      </View>
    );
  }

  return (
    <View>
      <Carousel
        // ref={(c) => (this.carousel = c)}
        data={DATA}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setIndex(index)}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
        autoplay={true}
        loop={true}
      />
      <Text style={styles.counter}>{index}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 50,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
  itemLabel: {
    color: "white",
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
