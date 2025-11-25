import { StyleSheet, View, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import AppText from "~/components/AppText";

export default function CalendarScreen() {
  const markedDates = {
    "2025-11-25": { marked: true, dotColor: "#3b82f6" },
    "2025-11-26": { marked: true, dotColor: "#ef4444" },
    "2025-11-30": { selected: true, selectedColor: "#3b82f6" },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.calendarWrapper}>
        <Calendar
          current={"2025-11-25"}
          markedDates={markedDates}
          theme={{
            backgroundColor: "#ffffff",
            calendarBackground: "#ffffff",
            textSectionTitleColor: "#64748b",
            selectedDayBackgroundColor: "#3b82f6",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#3b82f6",
            dayTextColor: "#1e293b",
            textDisabledColor: "#cbd5e1",
            dotColor: "#3b82f6",
            selectedDotColor: "#ffffff",
            arrowColor: "#3b82f6",
            monthTextColor: "#1e293b",
            textDayFontWeight: "400",
            textMonthFontWeight: "600",
            textDayHeaderFontWeight: "600",
            textDayFontSize: 16,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14,
          }}
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
        />
      </View>

      <View style={styles.eventsSection}>
        <AppText style={styles.sectionTitle}>Today's Events</AppText>
        <View style={styles.eventCard}>
          <View style={styles.eventDot} />
          <View style={styles.eventContent}>
            <AppText style={styles.eventTitle}>Team Meeting</AppText>
            <AppText style={styles.eventTime}>10:00 AM</AppText>
          </View>
        </View>
        <View style={styles.eventCard}>
          <View style={[styles.eventDot, { backgroundColor: "#ef4444" }]} />
          <View style={styles.eventContent}>
            <AppText style={styles.eventTitle}>Project Deadline</AppText>
            <AppText style={styles.eventTime}>5:00 PM</AppText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffff",
    paddingTop: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  calendarWrapper: {
    backgroundColor: "#ffffff",
    marginBottom: 16,
    paddingVertical: 8,
  },
  eventsSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#1e293b",
  },
  eventCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  eventDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#3b82f6",
    marginRight: 12,
  },
  eventContent: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#1e293b",
  },
  eventTime: {
    fontSize: 14,
    color: "#64748b",
  },
});
