import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Reactotron from 'reactotron-react-native';
import { updateGroups } from '../store/actions';
import { getGroups } from '../helpers/API';
import styles from './styles';

class GroupsList extends Component {

  constructor() {
    super();
    this.selectGroup = this.selectGroup.bind(this);
  }

  componentWillMount() {
    getGroups()
      .then(groups => this.props.updateGroups(groups.data));
  }

  selectGroup() {

  }

  render() {
    return (
      <View style={styles.container}>
        {_.isEmpty(this.props.groups) &&
          <View style={styles.centeredContainer}>
            <ActivityIndicator size={'large'} />
            <Text style={[styles.bodyText, styles.centerText]}>
              {'Carregando grupos.\n Caso demore, verifique sua internet.'}
            </Text>
          </View>
        }
        {!_.isEmpty(this.props.groups) &&
          <Text>{'Grupos'}</Text>
        }
      </View>
    );
  }
}
GroupsList.propTypes = {
  groups: React.PropTypes.array,
};
GroupsList.defaultProps = {
  groups: [],
};

const mapStateToProps = ({ app }) => {
  const { groups } = app;

  return { groups };
};
export default connect(mapStateToProps, { updateGroups })(GroupsList);
