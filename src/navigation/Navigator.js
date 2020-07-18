import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { MaterialIcons } from "@expo/vector-icons";
import Drawer from "../components/Drawer";
import HomeNavigator from "./HomeNavigator";
import StudiesNavigator from "./StudiesNavigator";
import GroupsNavigator from "./GroupsNavigator";
import AboutNavigator from "./AboutNavigator";
import { colors } from "../helpers/Constants";

const MainDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="home" size={24} color={tintColor} />
        )
      }
    },
    StudiesList: {
      screen: StudiesNavigator,
      navigationOptions: {
        drawerLabel: "Estudos",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="insert-drive-file" size={24} color={tintColor} />
        )
      }
    },
    GroupsList: {
      screen: GroupsNavigator,
      navigationOptions: {
        drawerLabel: "Grupos",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="group" size={24} color={tintColor} />
        )
      }
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: "Sobre a Rede",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="info" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    contentComponent: Drawer,
    contentOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.gray
    }
  }
);

export default MainDrawerNavigator;
