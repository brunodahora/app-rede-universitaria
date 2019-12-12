import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import StudiesList from "../screens/StudiesList";
import StudyDetail from "../screens/StudyDetail";
import { colors } from "../helpers/Constants";

const StudiesNavigator = createStackNavigator({
  StudiesList: {
    screen: StudiesList,
    navigationOptions: ({ navigation }) => ({
      title: "Estudos",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialIcons
            name="menu"
            size={24}
            color={colors.white}
            style={{ margin: 10 }}
          />
        </Touchable>
      ),
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.primary
      }
    })
  },
  StudyDetail: {
    screen: StudyDetail,
    navigationOptions: () => ({
      title: "Estudo",
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.primary
      }
    })
  }
});
export default StudiesNavigator;
