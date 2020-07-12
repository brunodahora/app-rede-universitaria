import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import { colors } from "../helpers/Constants";

export default HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Home",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <MaterialIcons
            name="menu"
            size={24}
            color={colors.white}
            style={{ margin: 10 }}
          />
        </TouchableOpacity>
      ),
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.primary,
      },
    }),
  },
});
