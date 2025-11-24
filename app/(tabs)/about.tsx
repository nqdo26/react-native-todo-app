import { StyleSheet, View } from "react-native";
import AppText from "../../components/AppText";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>About Screen</AppText>
      <AppText style={styles.description}>Welcome to My Todo App</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    color: "#4b5563",
  },
});
