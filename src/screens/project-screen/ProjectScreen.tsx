import { Text } from "@ui-kitten/components";
import { sstyled } from "components";
// import { moderateScale } from "react-native-size-matters";
import { withTheme } from "engines";
import * as R from "ramda";
import * as React from "react";
import {
  FlatList,
  Image,
  ImageStyle,
  ScrollView,
  TextStyle,
  View,
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
    project: { body00, body01, headline },
  } = route.params;
  const [_images, setImages] = React.useState([
    "https://cnnphilippines.com/.imaging/mte/demo-cnn-new/960/dam/Life/Culture-Life/2019/02/12/dating-apps/Dating-Apps.png/jcr:content/Dating%20Apps.png",
  ]);
  const [_bodies, setBodies] = React.useState([""]);
  React.useEffect(function sortContents() {
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
    const dbBodies = [
      route.params.project.body00,
      route.params.project.body01,
      route.params.project.body02,
      route.params.project.body03,
      route.params.project.body04,
      route.params.project.body05,
      route.params.project.body06,
      route.params.project.body07,
      route.params.project.body08,
      route.params.project.body09,
    ];
    const newImg = R.reject((img) => !img || img == "", dbImages);
    const newBodies = R.reject((b) => !b || b == "", dbBodies);
    setImages(newImg);
    setBodies(newBodies);
  }, []);
  const [_activeSlide, setActiveSlide] = React.useState(0);
  const [width, height] = useDimension("window");
  const refBody = React.useRef<FlatList>(null);
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
          justifyContent: "center",
          marginBottom: spacing(1),
          paddingHorizontal: spacing(6),
        }}
        adjustsFontSizeToFit
      >
        {headline}
        {/* {JSON.stringify(_images)} */}
      </Text>
      <FlatList
        ref={refBody}
        horizontal={true}
        data={_bodies}
        style={{ paddingHorizontal: spacing(2) }}
        renderItem={({ item }) => (
          <View
            style={{
              width: width,
              alignItems: "center",
              paddingHorizontal: spacing(2),
              borderWidth: 1,
              borderColor: "white",
            }}
          >
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
              {item}
              {/* {JSON.stringify(_images)} */}
            </Text>
          </View>
        )}
      />

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
        onS
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
