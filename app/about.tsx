import { View } from "react-native";
import AppText from "../components/AppText";

export default function AboutScreen() {
  return (
    <View className="p-4 bg-gray-50">
      <AppText className="text-xl font-bold mb-2">About Screen</AppText>
      <AppText className="text-gray-600">Welcome to My Todo App</AppText>
    </View>
  );
}
