import { Text } from "@ui-kitten/components";
import { sstyled } from "components";
// import { moderateScale } from "react-native-size-matters";
import { withTheme } from "engines";
import * as R from "ramda";
import * as React from "react";
import {
    Image,
    ImageStyle,
    ScrollView,
    TextStyle,
    ViewStyle
} from "react-native";
import S_Carou from "screens/home-screen/S_Carou";
import { dColors, IPSCR, scale, spacing, useDimension } from "utils";

export default withTheme((props: IPSCR) => {
  const {
    theme: { C },
    route,
  } = props;
  const {
    project: { body, headline },
  } = route.params;

  const [_images, setImages] = React.useState([
    "https://cnnphilippines.com/.imaging/mte/demo-cnn-new/960/dam/Life/Culture-Life/2019/02/12/dating-apps/Dating-Apps.png/jcr:content/Dating%20Apps.png",
  ]);
  React.useEffect(function sortImages() {
    const dbImages = [
      route.params.project.image00,
      route.params.project.image01,
      route.params.project.image02,
      route.params.project.image03,
      route.params.project.image04,
      route.params.project.image05,
      route.params.project.image06,
      route.params.project.image07,
      route.params.project.image08,
      route.params.project.image09,
    ];
    const newImg = R.reject((img) => !img || img == "", dbImages);
    setImages(newImg);
  }, []);

  const [width, height] = useDimension("window");
  return (
    <ScrollView
      style={{
        backgroundColor: C.background01,

        paddingTop: spacing(5),
      }}
    >
      <Text
        category={"h3"}
        style={{
          fontSize: 26,
          color: "white",
          textAlign: "center",
          marginBottom: spacing(1),
          paddingHorizontal: spacing(6),
        }}
        adjustsFontSizeToFit
      >
        {headline}
        {/* {JSON.stringify(_images)} */}
      </Text>
      <Text
        category={"s2"}
        style={{
          fontSize: 20,
          color: "white",
          textAlign: "center",
          paddingHorizontal: spacing(6),
        }}
        adjustsFontSizeToFit
      >
        {body}
        {/* {JSON.stringify(_images)} */}
      </Text>

      <S_Carou
        {...props}
        data={_images}
        itemRender={(uri) => (
          <Image
            resizeMode="contain"
            source={{ uri }}
            style={{ width: "100%", height: "100%" }}
            // style={[SS().ITEM_CTNR]}
          ></Image>
        )}
      />

      {/* <FlatGrid
        itemDimension={width <= 1000 ? width * 0.9 : width * 0.2}
        data={_images}
        style={SS().GRID_CTNR}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity
          // onPress={() => Navigation.navigate("Project", { project: item })}
          >
            <Image
              resizeMode="contain"
              source={{ uri: item }}
              style={[
                SS().ITEM_CTNR,
                { height: width <= 1000 ? width * 0.9 : width * 0.3 },
              ]}
            ></Image>
          </TouchableOpacity>
        )}
      /> */}
    </ScrollView>
  );
});

const LinkText = sstyled(Text)({
  fontSize: 20,
  fontWeight: "500",
  fontStyle: "italic",
});

const SS = (C?: dColors) => {
  return {
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
