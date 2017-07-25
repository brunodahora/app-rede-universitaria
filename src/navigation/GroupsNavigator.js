import React from 'react';
import { StackNavigator } from 'react-navigation';
import Touchable from 'react-native-platform-touchable';
import { MaterialIcons } from '@expo/vector-icons';
import GroupsList from '../screens/GroupsList';
import GroupDetail from '../screens/GroupDetail';
import { colors } from '../helpers/Constants';

const GroupsNavigator = StackNavigator({
  GroupsList: {
    screen: GroupsList,
    navigationOptions: ({ navigation }) => ({
      title: 'Grupos',
      headerLeft: (
        <Touchable onPress={() => navigation.navigate('DrawerOpen')}>
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
        backgroundColor: colors.primary,
      },
    }),
  },
  GroupDetail: {
    screen: GroupDetail,
    navigationOptions: () => ({
      title: 'Grupo',
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.primary,
      },
    }),
  },
});
export default GroupsNavigator;
