import React from 'react';
import { StackNavigator } from 'react-navigation';
import Touchable from 'react-native-platform-touchable'
import { MaterialIcons } from '@expo/vector-icons';
import GroupsList from '../screens/GroupsList'

export default GroupsNavigator = StackNavigator({
  Home: {
    screen: GroupsList,
    navigationOptions: ({ navigation }) => ({
      title: 'Grupos',
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
