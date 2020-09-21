import { Text } from "@ui-kitten/components";
import { TouchableWeb, TouchableWebProps } from "components";
import { useSheets } from "engines/hooks";
import React from "react";
import {
    ActivityIndicator,
    ImageBackground,
    TextStyle,
    View,
    ViewStyle
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { Navigation } from "screens/_navigation";
import { dColors, IPSCR, scale, spacing, useDimension } from "utils";

export function S_ExperimentalGrid(props: IPSCR) {
  const {
    theme: { C },
  } = props;
  const { data, fields: keys } = useSheets(
    // "1QkECelCYiVVxopwsZD2UsLYZdmd1vFzFc0-pLb71rX8"
    "1kJ5X_pxlo56w62-m6O7-antd2IVs36-vuf8sEJtsyCE"
  );
  console.log("data: ", data);

  const [width] = useDimension("window");

  const [_color, setColor] = React.useState(0);

  if (!!data) {
    return (
      <View style={{}}>
        {/* <Text>{JSON.stringify(keys)}</Text> */}
        <Text
          category={"h3"}
          style={{ paddingHorizontal: spacing(6), color: C.dim }}
        >
          Experimental
        </Text>
        <FlatGrid
          itemDimension={width <= 1000 ? width * 0.9 : width * 0.3}
          data={data}
          style={SS().GRID_CTNR}
          // staticDimension={300}
          // fixed
          spacing={10}
          renderItem={({ item }) => (
            <GridCtnr
              {...props}
              onPress={() => Navigation.navigate("Project", { project: item })}
              item={item}
            />
          )}
        />
      </View>
    );
  } else return <ActivityIndicator />;
}

interface dGridCtnr extends TouchableWebProps, IPSCR {
  item: { thumbnail: string; title: string; color: string; label: string };
}
const GridCtnr = (props: dGridCtnr) => {
  const {
    theme: { C },
    onPress,
    item,
  } = props;
  const [_borderWidth, setBorderWidth] = React.useState(0);
  return (
    <TouchableWeb
      onMouseEnter={(e) => {
        setBorderWidth(6);
      }}
      onMouseLeave={(e) => {
        setBorderWidth(0);
      }}
      onPress={onPress}
    >
      <ImageBackground
        source={{ uri: item.thumbnail }}
        style={[
          SS().ITEM_CTNR,
          {
            backgroundColor: item.color,
            overflow: "hidden",
            borderWidth: _borderWidth,
            borderColor: item.color,
          },
        ]}
      >
        <Text style={SS().itemName}>{item.title}</Text>
        <Text style={SS().itemCode}>{item.label}</Text>
      </ImageBackground>
    </TouchableWeb>
  );
};

const SS = (C?: dColors) => {
  return {
    GRID_CTNR: {
      marginTop: 10,
      marginHorizontal: spacing(5),
      // flex: 1,
    } as ViewStyle,
    ITEM_CTNR: {
      justifyContent: "flex-end",
      borderRadius: 5,
      padding: 10,
      height: 300,
    } as ViewStyle,
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
