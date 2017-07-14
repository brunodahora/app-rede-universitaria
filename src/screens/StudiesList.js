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
import { updateStudies, selectStudy } from '../store/actions';
import { getStudies } from '../helpers/API';
import styles from './styles';

import StudyItem from '../components/StudyItem';

class StudiesList extends Component {

  constructor() {
    super();
    this.selectStudy = this.selectStudy.bind(this);
    this.getList = this.getList.bind(this);
  }

  componentWillMount() {
    getStudies()
      .then(studies => this.props.updateStudies(studies.data));
  }

  getList() {
    return this.props.studies.map(item => ({ ...item, key: item.id }));
  }

  selectStudy(study) {
    const { navigate } = this.props.navigation;

    this.props.selectStudy(study);
    navigate('StudyDetail');
  }

  render() {
    return (
      <View style={styles.container}>
        {_.isEmpty(this.props.studies) &&
          <View style={styles.centeredContainer}>
            <ActivityIndicator size={'large'} />
            <Text style={[styles.bodyText, styles.centerText]}>
              {'Carregando estudos.\nCaso demore, verifique sua internet.'}
            </Text>
          </View>
        }
        {!_.isEmpty(this.props.studies) &&
          <FlatList
            data={this.getList()}
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
