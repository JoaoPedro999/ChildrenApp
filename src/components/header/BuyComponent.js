import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../../styles/styles";

function BuyComponent() {
  return (
    <View style={styles.Buttons}>
      <TouchableOpacity onPress={() => console.log("Buy Alert")}>
        <Image style={styles.image} source={require("../../Images/buy.png")} />
      </TouchableOpacity>
    </View>
  );
}

export default BuyComponent;
