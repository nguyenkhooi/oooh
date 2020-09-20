import { Text } from "@ui-kitten/components";
import { useSheets } from "engines/hooks";
import React from "react";
import {
  ActivityIndicator,
  ImageBackground,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { Navigation } from "screens/_navigation";
import { dColors, IPSCR, scale, spacing, useDimension } from "utils";

export function S_PortfolioGrid(props: IPSCR) {
  const {
    theme: { C },
  } = props;
  const { data, keys } = useSheets(
    "1QkECelCYiVVxopwsZD2UsLYZdmd1vFzFc0-pLb71rX8"
  );
  console.log("data: ", data);

  const [width] = useDimension("window");

  if (!!data) {
    return (
      <View style={{}}>
        {/* <Text>{JSON.stringify(keys)}</Text> */}
        <Text
          category={"h3"}
          style={{ paddingHorizontal: spacing(6), color: C.dim }}
        >
          Work
        </Text>
        <FlatGrid
          itemDimension={width <= 1000 ? width * 0.9 : width * 0.3}
          data={data}
          style={SS().GRID_CTNR}
          // staticDimension={300}
          // fixed
          spacing={10}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => Navigation.navigate("Project", { project: item })}
            >
              <ImageBackground
                source={{ uri: item.thumbnail }}
                style={[
                  SS().ITEM_CTNR,
                  { backgroundColor: item.color, overflow: "hidden" },
                ]}
              >
                <Text style={SS().itemName}>{item.title}</Text>
                <Text style={SS().itemCode}>{item.label}</Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  } else return <ActivityIndicator />;
}

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
