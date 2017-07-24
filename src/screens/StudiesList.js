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

import { updateStudies, selectStudy } from '../store/actions';
import { getStudies } from '../helpers/API';
import styles from './styles';
import { colors } from '../helpers/Constants';

import StudyItem from '../components/StudyItem';

class StudiesList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pages: 1,
      lastPage: 1,
      studies: props.studies,
      list: props.studies,
      search: '',
    };

    this.selectStudy = this.selectStudy.bind(this);
    this.getList = this.getList.bind(this);
  }

  componentWillMount() {
    getStudies()
      .then((studies) => {
        this.setState({
          pages: studies.headers['x-wp-totalpages'],
          lastPage: 1,
          search: this.state.search,
          list: studies.data,
          studies: studies.data,
        });
        this.props.updateStudies(studies.data);
      });
  }

  getList() {
    return this.state.list ?
      this.state.list.map(item => ({ ...item, key: item.id }))
      : [];
  }

  selectStudy(study) {
    const { navigate } = this.props.navigation;

    this.props.selectStudy(study);
    navigate('StudyDetail');
  }

  render() {
    return (
      <View style={styles.container}>
        {_.isEmpty(this.state.studies) &&
          <View style={styles.body}>
            <ActivityIndicator size={'large'} />
            <Text style={[styles.bodyText, styles.centerText]}>
              {'Carregando estudos.\nCaso demore, verifique sua internet.'}
            </Text>
          </View>
        }
        {!_.isEmpty(this.state.studies) &&
          <FlatList
            data={this.getList()}
            ListHeaderComponent={
              <View style={styles.searchbar}>
                <MaterialIcons name="search" size={24} color={colors.gray} />
                <TextInput
                  style={{ flex: 1, marginLeft: 5, height: 40 }}
                  onChangeText={(search) => {
                    const list = this.state.studies.filter(item =>
                      item.title.rendered.toLowerCase().includes(search.toLowerCase()));
                    this.setState({
                      ...this.state,
                      list,
                      search,
                    });
                  }}
                  placeholder="Pesquise pelo título"
                  value={this.state.search}
                />
              </View>
            }
            ListEmptyComponent={
              <View style={styles.body}>
                <Text style={[styles.bodyText, styles.centerText]}>
                  {'Nenhum estudo encontrado'}
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
                onPress={() => this.selectStudy(data.item)}
              >
                <StudyItem study={data.item} />
              </Touchable>
            )}
          />
        }
      </View>
    );
  }
}
StudiesList.propTypes = {
  studies: PropTypes.array,
  updateStudies: PropTypes.func.isRequired,
  selectStudy: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};
StudiesList.defaultProps = {
  studies: [],
};

const mapStateToProps = ({ app }) => {
  const { studies } = app;

  return { studies };
};
export default connect(mapStateToProps, { updateStudies, selectStudy })(StudiesList);
