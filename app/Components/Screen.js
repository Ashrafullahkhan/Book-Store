import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";
import { View } from "react-native";

function Screen({ children, padding = 10 }) {
  return <View style={[styles.screen, { padding }]}>{children}</View>;
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
export default Screen;
