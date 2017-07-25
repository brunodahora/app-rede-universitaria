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
import { getGroupsPaginated } from '../helpers/API';
import styles from './styles';
import { colors } from '../helpers/Constants';

import GroupItem from '../components/GroupItem';

const convert = studies => studies.map(item => ({ ...item, key: item.id }));

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
    this.updateGroups = this.updateGroups.bind(this);
  }

  componentWillMount() {
    this.updateGroups();
  }

  updateGroups(page = 1) {
    getGroupsPaginated(page)
      .then((groups) => {
        const mergedGroups = _.sortBy(_.unionWith(convert(groups.data), this.props.groups, _.isEqual), 'id');
        this.setState({
          pages: groups.headers['x-wp-totalpages'],
          lastPage: page,
          search: this.state.search,
          list: !_.isEmpty(this.state.search) ?
            mergedGroups.filter(item =>
              item.title.rendered.toLowerCase().includes(this.state.search.toLowerCase()))
            : mergedGroups,
          groups: mergedGroups,
        });
        this.props.updateGroups(mergedGroups);
        if (parseInt(groups.headers['x-wp-totalpages'], 10) !== page) {
          const nextPage = page + 1;
          this.updateGroups(nextPage);
        }
      });
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
          <View>
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
            <FlatList
              data={this.state.list}
              ListEmptyComponent={
                <View style={styles.body}>
                  <Text style={[styles.bodyText, styles.centerText]}>
                    {'Nenhum grupo encontrado.'}
                  </Text>
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
          </View>
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
