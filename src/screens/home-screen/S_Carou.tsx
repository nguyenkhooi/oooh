import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel"; // Version can be specified in package.json
import { useDimension } from "utils";

const DATA: readonly string[] = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i);
}

export default function S_Carou() {
  const [index, setIndex] = React.useState(0);

  const [width, height] = useDimension("window");

  const [_dim, setDim] = React.useState({
    sliderWidth: width,
    width: Math.round(width * 0.9),
    height: Math.round(Math.round(width * 0.9) * 0.4),
    translateValue: Math.round((width * 0.3) / 4),
  });

  React.useEffect(
    function dynamicSize() {
      const SLIDER_WIDTH = width;
      const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
      const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 0.4);
      const TRANSLATE_VALUE = Math.round((SLIDER_WIDTH * 0.3) / 4);
      setDim({
        sliderWidth: SLIDER_WIDTH,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        translateValue: TRANSLATE_VALUE,
      });
    },
    [width, height]
  );
  function _renderItem({ item }) {
    return (
      <View
        style={[
          styles.itemContainer,
          {
            width: _dim.width,
            height: _dim.height,
          },
        ]}
      >
        <Text style={styles.itemLabel}>{width}</Text>
      </View>
    );
  }

  return (
    <View>
      <Carousel
        // ref={(c) => (this.carousel = c)}
        layout={"default"}
        data={DATA}
        renderItem={_renderItem}
        sliderWidth={_dim.sliderWidth}
        itemWidth={_dim.width}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        autoplay={true}
        loop={true}
      />
      {/* <Text style={styles.counter}>{_dim.width + "  " + _dim.height}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 50,
  },
  itemContainer: {
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
