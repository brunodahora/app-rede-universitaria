import React from 'react';
import { StackNavigator } from 'react-navigation';
import Touchable from 'react-native-platform-touchable'
import { MaterialIcons } from '@expo/vector-icons';
import StudiesList from '../screens/StudiesList'

export default StudiesNavigator = StackNavigator({
  StudiesList: {
    screen: StudiesList,
    navigationOptions: ({ navigation }) => ({
      title: 'Estudos',
      headerLeft: (<Touchable onPress={() => navigation.navigate('DrawerOpen')}>
                  <MaterialIcons
                    name="menu"
                    size={24}
                    style={{margin: 10}}
                  />
                </Touchable>)
    })
  },
});
