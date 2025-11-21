import { StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import AppText from "../components/AppText";

export default function DetailScreen() {
  const { id, title, des } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <AppText style={styles.label}>ID: {id}</AppText>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.description}>{des}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 12,
    color: "#64748b",
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#475569",
  },
});
