import { StyleSheet } from "react-native";

export const FONTS = {
  "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
};

export const FONT_FAMILY = "OpenSans-Regular";

export const globalStyles = StyleSheet.create({
  globalFont: {
    fontFamily: FONT_FAMILY,
  },
});
