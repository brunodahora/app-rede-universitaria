import { StyleSheet } from 'react-native';
import { colors } from '../helpers/Constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.gray,
    margin: 10,
  },
  bodyText: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.gray,
    marginBottom: 10,
  },
  roundedIcon: {
    margin: 10,
    padding: 10,
    backgroundColor: colors.main,
    borderRadius: 50
  }
});

export default styles;
