import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import GoalItem from "./Components/GoalItem";

export default function App() {
  const [initialValue, setInitialValue] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setInitialValue(enteredText);
    console.warn(initialValue);
  }

  function addGoalHandler() {
    if (initialValue.trim()) {
      setGoals((prevGoals) => [
        ...prevGoals,
        { text: initialValue, id: Math.random().toString() },
      ]);
      setInitialValue("");
      console.log(goals);
    }
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          value={initialValue}
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button
          title="Add Goal"
          onPress={addGoalHandler}
          color={"#5e0acc"}
        ></Button>
      </View>
      <View style={styles.goalsContainer}>
        {/* <ScrollView>
          {goals.map((element) => (
            <View key={element} style={styles.goalItem}>
              <Text style={styles.goalText}>{element}</Text>
            </View>
          ))}
        </ScrollView> */}

        <FlatList
          data={goals}
          renderItem={({ item }) => <GoalItem item={item.text}></GoalItem>}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 5,
    padding: 8,
  },

  goalsContainer: {
    flex: 4,
  },
});
