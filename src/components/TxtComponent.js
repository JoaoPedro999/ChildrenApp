import { Text, StyleSheet } from "react-native";

const TxtComponent = ({ children }) => {
  return (
    <Text>
      {" "}
      Componente
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  bckimg: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TxtComponent;
