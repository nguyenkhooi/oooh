import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StorybookPage from "./storybook";

function PureApp() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

let SHOW_STORYBOOK = true;
const App = SHOW_STORYBOOK ? StorybookPage : PureApp;

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
