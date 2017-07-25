import React from 'react';
import { StackNavigator } from 'react-navigation';
import Touchable from 'react-native-platform-touchable';
import { MaterialIcons } from '@expo/vector-icons';
import StudiesList from '../screens/StudiesList';
import StudyDetail from '../screens/StudyDetail';
import { colors } from '../helpers/Constants';

const StudiesNavigator = StackNavigator({
  StudiesList: {
    screen: StudiesList,
    navigationOptions: ({ navigation }) => ({
      title: 'Estudos',
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
  StudyDetail: {
    screen: StudyDetail,
    navigationOptions: () => ({
      title: 'Estudo',
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.primary,
      },
    }),
  },
});
export default StudiesNavigator;
