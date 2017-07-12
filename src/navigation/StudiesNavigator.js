import React from 'react';
import { StackNavigator } from 'react-navigation';
import Touchable from 'react-native-platform-touchable'
import { MaterialIcons } from '@expo/vector-icons';
import StudiesList from '../screens/StudiesList'
import { colors } from '../helpers/Constants'

export default StudiesNavigator = StackNavigator({
  StudiesList: {
    screen: StudiesList,
    navigationOptions: ({ navigation }) => ({
      title: 'Estudos',
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
