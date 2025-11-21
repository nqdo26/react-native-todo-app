import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import AppText from "../components/AppText";
import { Link, Stack } from "expo-router";
import { ITodo } from "../interfaces";

export default function HomeScreen() {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, title: "Todo 1", des: "Day la todo 1" },
    { id: 2, title: "Todo 2", des: "Day la todo 2" },
    { id: 3, title: "Todo 3", des: "Day la todo 3" },
  ]);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.header}>
        <AppText style={styles.headerTitle}>Too Doo</AppText>
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
  },
  container: {
    padding: 16,
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
});
