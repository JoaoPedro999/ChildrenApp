import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TxtComponent from "./src/components/TxtComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <TxtComponent>
        <br />
        <Text>Eu sou o children 1</Text>
        <br />
        <Text>Eu sou o children 2</Text>
        <br />
        <Text>Eu sou o children 3</Text>
      </TxtComponent>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
