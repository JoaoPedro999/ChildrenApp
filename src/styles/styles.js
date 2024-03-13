import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 75,
    bottom: 375,
  },
  Buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    gap: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default styles;
