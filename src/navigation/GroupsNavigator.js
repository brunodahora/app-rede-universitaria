import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import GroupsList from "../screens/GroupsList";
import GroupDetail from "../screens/GroupDetail";
import { colors } from "../helpers/Constants";

const GroupsNavigator = createStackNavigator({
  GroupsList: {
    screen: GroupsList,
    navigationOptions: ({ navigation }) => ({
      title: "Grupos",
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
  GroupDetail: {
    screen: GroupDetail,
    navigationOptions: () => ({
      title: "Grupo",
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.primary
      }
    })
  }
});
export default GroupsNavigator;
