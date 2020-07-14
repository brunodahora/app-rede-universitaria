import React from "react";
import { ScrollView, Image } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import styles from "./styles";

/* eslint-disable global-require */
const DrawerContentComponent = props => (
  <ScrollView style={styles.drawerContainer}>
    <Image
      resizeMode="contain"
      style={styles.logo}
      source={require("../assets/imgs/logo-branca-lateral.png")}
    />
    <DrawerNavigatorItems {...props} />
  </ScrollView>
);

export default DrawerContentComponent;
