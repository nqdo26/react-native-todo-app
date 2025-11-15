import { Button, View } from "react-native";
import AppText from "../components/AppText";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{ padding: 16 }}>
      <AppText style={{ fontSize: 30, color: "#2563eb" }}>
        Home Screen hehe
      </AppText>
      <Link href="/detail" asChild>
        <Button title="Go to Detail Screen" />
      </Link>
    </View>
  );
}
