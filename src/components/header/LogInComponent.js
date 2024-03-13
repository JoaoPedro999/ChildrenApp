import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../../styles/styles";

function LogInComponent() {
  return (
    <View style={styles.Buttons}>
      <TouchableOpacity onPress={() => console.log("Log In Alert")}>
        <Text>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LogInComponent;
