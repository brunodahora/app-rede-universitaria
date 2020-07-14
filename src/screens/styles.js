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
    flexDirection: 'column'
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.primary,
    margin: 10,
  },
  bodyText: {
    fontSize: 20,
    color: colors.white,
    marginBottom: 10,
    marginLeft: 20
  },
  bodyTextAbout: {
    fontSize: 20,
    color: colors.primary,
    marginBottom: 10
  },
  labelTextGroup: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.primary,
    margin: 10,
    marginBottom:0
  },
  bodyTextGroup: {
    fontSize: 20,
    color: colors.primary,
    marginBottom: 10,
    marginLeft: 20
  },
  centerText: {
    textAlign: "center",
  },
  subTitle: {
    fontSize: 15,
    color: colors.gray,
    textAlign: "center"
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
  cardRounded: {
    margin: 10,
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 30,
    flexDirection: 'row',
    marginRight: 30,
    marginLeft: 30,
    paddingTop: 30,
    paddingBottom: 30
  },
  searchbar: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logo: {
    width: 500,
    height: 150
  },
});

export default styles;
