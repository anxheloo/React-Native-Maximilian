import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredText) {
    if (enteredText.trim()) {
      setGoals((prevGoals) => [
        ...prevGoals,
        { text: enteredText, id: Math.random().toString() },
      ]);

      endAddGoalHandler();
    }
  }

  function deleteHandler(id) {
    setGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((element) => {
        element.id !== id;
      });
    });
  }

  return (
    <>
      <StatusBar style="light"></StatusBar>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        ></Button>

        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        ></GoalInput>
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={({ item }) => (
              <GoalItem
                item={item.text}
                onDeleteItem={deleteHandler}
                id={item.id}
              ></GoalItem>
            )}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    // backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 4,
  },
});
