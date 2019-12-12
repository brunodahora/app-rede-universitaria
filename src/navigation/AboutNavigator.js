import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import About from "../screens/About";
import { colors } from "../helpers/Constants";

const AboutNavigator = createStackNavigator({
  Home: {
    screen: About,
    navigationOptions: ({ navigation }) => ({
      title: "Sobre",
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
  }
});
export default AboutNavigator;
