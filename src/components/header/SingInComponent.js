import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../../styles/styles";

function SingInComponent() {
  return (
    <View style={styles.Buttons}>
      <TouchableOpacity onPress={() => console.log("Sing In Alert")}>
        <Text>Sing In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SingInComponent;
