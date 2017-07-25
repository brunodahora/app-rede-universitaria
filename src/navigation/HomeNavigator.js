import React from 'react';
import { StackNavigator } from 'react-navigation';
import Touchable from 'react-native-platform-touchable'
import { MaterialIcons } from '@expo/vector-icons';
import Home from '../screens/Home'
import { colors } from '../helpers/Constants'

export default HomeNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: (<Touchable onPress={() => navigation.navigate('DrawerOpen')}>
                  <MaterialIcons
                    name="menu"
                    size={24}
                    color={colors.white}
                    style={{margin: 10}}
                  />
                </Touchable>),
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.primary
      }
    })
  },
});
