import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TxtComponent from "./src/components/TxtComponent";
import HeaderComponent from "./src/components/HeaderComponent";
import BuyComponent from "./src/components/header/BuyComponent";
import LogInComponent from "./src/components/header/LogInComponent";
import SingInComponent from "./src/components/header/SingInComponent";

export default function App() {
  return (
    <View style={styles.container}>
      {/*  Componente Header */}
      <HeaderComponent>
        {/* Childrens  */}
        <LogInComponent />
        <SingInComponent />
        <BuyComponent />
      </HeaderComponent>

      {/* Componente Text */}
      <TxtComponent>
        {/* Childrens */}
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
