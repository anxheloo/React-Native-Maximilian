import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

export default function GoalInput(props) {
  const [initialValue, setInitialValue] = useState("");

  function goalInputHandler(enteredText) {
    setInitialValue(enteredText);
    console.warn(initialValue);
  }

  function addGoalHandler() {
    props.onAddGoal(initialValue);
    setInitialValue("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        ></Image>

        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          value={initialValue}
          onChangeText={goalInputHandler}
        ></TextInput>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color={"#b180f0"}
            ></Button>
          </View>

          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCancel}
              color={"#f31282"}
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "90%",
    padding: 16,
  },

  button: {
    width: "30%",
    marginHorizontal: 8,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
