import { View } from "react-native";
import styles from "../styles/styles";

const HeaderComponent = ({ children }) => {
  return <View style={styles.containerHeader}>{children}</View>;
};

export default HeaderComponent;
