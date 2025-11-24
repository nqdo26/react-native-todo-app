import { StyleSheet, View } from "react-native";
import AppText from "~/components/AppText";

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Calendar</AppText>
      <AppText style={styles.description}>
        Lịch của bạn sẽ hiển thị ở đây
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#64748b",
  },
});
