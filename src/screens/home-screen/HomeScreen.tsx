import { Text } from "@ui-kitten/components";
import * as React from "react";
import { View } from "react-native";
import { moderateScale } from "react-native-size-matters";

export function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingHorizontal: moderateScale(20),
      }}
    >
      <Text category={"h1"}>Hi, my name is Khoi Tran 👋</Text>
      <Text category={"s1"} style={{ fontSize: moderateScale(20) }}>
        I'm an experienced mobile/web developer and UX manager in the US and
        Vietnam. I love doing both experimental work and real products. See
        things I follow on my blog or read a bit about me.
      </Text>
    </View>
  );
}
