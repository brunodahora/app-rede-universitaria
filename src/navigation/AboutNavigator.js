import React from 'react';
import { StackNavigator } from 'react-navigation';
import Touchable from 'react-native-platform-touchable'
import { MaterialIcons } from '@expo/vector-icons';
import About from '../screens/About'
import { colors } from '../helpers/Constants'

export default AboutNavigator = StackNavigator({
  Home: {
    screen: About,
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
        backgroundColor: colors.main
      }
    })
  },
});
