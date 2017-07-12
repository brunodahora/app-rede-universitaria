import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../helpers/Constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  logo: {
    width: Dimensions.get('window').width,
    margin: 10,
    alignSelf: 'center'
  }
});

export default styles;
