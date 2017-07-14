import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { DrawerItems } from 'react-navigation';
import styles from './styles';

/* eslint-disable global-require */
const DrawerContentComponent = props => (
  <ScrollView style={styles.drawerContainer}>
    <Image
      resizeMode="contain"
      style={styles.logo}
      source={require('../assets/imgs/logo-rede.png')}
    />
    <DrawerItems {...props} />
  </ScrollView>
);

export default DrawerContentComponent;
