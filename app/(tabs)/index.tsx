import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import AppText from "~/components/AppText";
import { Link } from "expo-router";
import { ITodo } from "~/interfaces";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, title: "Todo 1", des: "Day la todo 1" },
    { id: 2, title: "Todo 2", des: "Day la todo 2" },
    { id: 3, title: "Todo 3", des: "Day la todo 3" },
  ]);

  return (
    <>
      <View style={styles.header}>
        <AppText style={styles.headerTitle}>TooDoo</AppText>

        <Ionicons name="add" size={28} color="#ffffff" />
      </View>
      <View style={styles.container}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname: "/detail",
                params: { id: item.id, title: item.title, des: item.des },
              }}
              asChild
            >
              <TouchableOpacity style={styles.todoItem}>
                <AppText style={styles.todoTitle}>{item.title}</AppText>
                <AppText style={styles.todoDes}>{item.des}</AppText>
              </TouchableOpacity>
            </Link>
          )}
        />

        <TouchableOpacity
          style={styles.fab}
          onPress={() => console.log("Add new todo")}
        >
          <Ionicons name="add" size={28} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f8fafc",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "700",
    color: "#3b82f6",
  },
  container: {
    padding: 16,
    flex: 1,
  },
  todoItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  todoDes: {
    fontSize: 14,
    color: "#64748b",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#3b82f6",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
