import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import Reactotron from 'reactotron-react-native';
import { updateGroups, selectGroup } from '../store/actions';
import { getGroups } from '../helpers/API';
import styles from './styles';

import GroupItem from '../components/GroupItem';

class GroupsList extends Component {

  constructor() {
    super();
    this.selectGroup = this.selectGroup.bind(this);
    this.getList = this.getList.bind(this);
  }

  componentWillMount() {
    getGroups()
      .then(groups => this.props.updateGroups(groups.data));
  }

  getList() {
    return this.props.groups.map(item => ({ ...item, key: item.id }));
  }

  selectGroup(group) {
    const { navigate } = this.props.navigation;

    this.props.selectGroup(group);
    navigate('GroupDetail');
  }

  render() {
    return (
      <View style={styles.container}>
        {_.isEmpty(this.props.groups) &&
          <View style={styles.centeredContainer}>
            <ActivityIndicator size={'large'} />
            <Text style={[styles.bodyText, styles.centerText]}>
              {'Carregando grupos.\nCaso demore, verifique sua internet.'}
            </Text>
          </View>
        }
        {!_.isEmpty(this.props.groups) &&
          <FlatList
            data={this.getList()}
            renderItem={data => (
              <Touchable
                onPress={() => this.selectGroup(data.item)}
              >
                <GroupItem group={data.item} />
              </Touchable>
            )}
          />
        }
      </View>
    );
  }
}
GroupsList.propTypes = {
  groups: PropTypes.array,
  updateGroups: PropTypes.func.isRequired,
  selectGroup: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};
GroupsList.defaultProps = {
  groups: [],
};

const mapStateToProps = ({ app }) => {
  const { groups } = app;

  return { groups };
};
export default connect(mapStateToProps, { updateGroups, selectGroup })(GroupsList);
