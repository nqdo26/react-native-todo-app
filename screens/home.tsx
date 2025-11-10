import { Text, View } from "react-native";
import { FONT_FAMILY } from "../constants/fonts";

export default function HomeScreen() {
  return (
    <View className="p-4">
      <Text
        className="text-3xl text-blue-600"
        style={{ fontFamily: FONT_FAMILY.regular }}
      >
        Home Screen
      </Text>
    </View>
  );
}
