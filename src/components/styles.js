import { StyleSheet, Dimensions, Platform } from "react-native";
import { colors } from "../helpers/Constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    ...Platform.select({
      ios: {
        paddingTop: 10,
      },
    }),
  },
  logo: {
    width: Dimensions.get("window").width,
    margin: 10,
    alignSelf: "center",
  },
  listTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  listContent: {
    fontSize: 16,
  },
  item: {
    margin: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default styles;
