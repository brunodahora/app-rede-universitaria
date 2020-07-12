import { StyleSheet } from "react-native";
import { colors } from "../helpers/Constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  centeredContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.gray,
    margin: 10,
  },
  bodyText: {
    fontSize: 20,
    color: colors.gray,
    marginBottom: 10,
  },
  labelText: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.gray,
    margin: 10,
  },
  centerText: {
    textAlign: "center",
  },
  justifyText: {
    textAlign: "justify",
  },
  roundedIcon: {
    margin: 10,
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
  searchbar: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default styles;
