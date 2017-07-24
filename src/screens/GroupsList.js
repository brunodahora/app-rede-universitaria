import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TextInput,
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import _ from 'lodash';

import { updateGroups, selectGroup } from '../store/actions';
import { getGroups } from '../helpers/API';
import styles from './styles';
import { colors } from '../helpers/Constants';

import GroupItem from '../components/GroupItem';

class GroupsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pages: 1,
      lastPage: 1,
      search: '',
      list: props.groups,
      groups: props.groups,
    };

    this.selectGroup = this.selectGroup.bind(this);
    this.getList = this.getList.bind(this);
  }

  componentWillMount() {
    getGroups()
      .then((groups) => {
        this.setState({
          pages: groups.headers['x-wp-totalpages'],
          lastPage: 1,
          search: this.state.search,
          list: groups.data,
          groups: groups.data,
        });
        this.props.updateGroups(groups.data);
      });
  }

  getList() {
    return this.state.list ?
      this.state.list.map(item => ({ ...item, key: item.id }))
      : [];
  }

  selectGroup(group) {
    const { navigate } = this.props.navigation;

    this.props.selectGroup(group);
    navigate('GroupDetail');
  }

  render() {
    return (
      <View style={styles.container}>
        {_.isEmpty(this.state.groups) &&
          <View style={styles.body}>
            <ActivityIndicator size={'large'} />
            <Text style={[styles.bodyText, styles.centerText]}>
              {'Carregando grupos.\nCaso demore, verifique sua internet.'}
            </Text>
          </View>
        }
        {!_.isEmpty(this.state.groups) &&
          <FlatList
            data={this.getList()}
            ListEmptyComponent={
              <View style={styles.body}>
                <Text style={[styles.bodyText, styles.centerText]}>
                  {'Nenhum grupo encontrado.'}
                </Text>
              </View>
            }
            ListHeaderComponent={
              <View style={styles.searchbar}>
                <MaterialIcons name="search" size={24} color={colors.gray} />
                <TextInput
                  style={{ flex: 1, marginLeft: 5, height: 40 }}
                  onChangeText={(search) => {
                    const list = this.state.groups.filter(item =>
                      item.title.rendered.toLowerCase().includes(search.toLowerCase()));
                    this.setState({
                      ...this.state,
                      list,
                      search,
                    });
                  }}
                  placeholder="Pesquise um grupo"
                  value={this.state.search}
                />
              </View>
            }
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: colors.gray,
                }}
              />
            )}
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
