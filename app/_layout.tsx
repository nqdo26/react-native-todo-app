import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";
import HomeScreen from "../screens/home";
import AboutScreen from "../screens/about";
import DetailScreen from "../screens/detail";
import { FONTS } from "../constants/fonts";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts(FONTS);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View className="flex-1 bg-slate-50">
      <View className="flex-1 pt-12 px-4">
        <HomeScreen />
        <DetailScreen />
        <AboutScreen />
      </View>
    </View>
  );
}
