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
import { updateStudies } from '../store/actions';
import { getStudies } from '../helpers/API';
import styles from './styles';

class StudiesList extends Component {

  constructor() {
    super();
    this.selectGroup = this.selectGroup.bind(this);
  }

  componentWillMount() {
    getStudies()
      .then(studies => this.props.updateStudies(studies.data))
  }

  selectStudy() {

  }

  render() {
    return (
      <View style={styles.container}>
        {_.isEmpty(this.props.studies) &&
          <View style={styles.centeredContainer}>
            <ActivityIndicator size={'large'} />
            <Text style={[styles.bodyText, styles.centerText]}>
              {'Carregando estudos.\n Caso demore, verifique sua internet.'}
            </Text>
          </View>
        }
        {!_.isEmpty(this.props.studies) &&
          <Text>{'Estudos'}</Text>
        }
      </View>
    );
  }
}
StudiesList.propTypes = {
  studies: React.PropTypes.array,
};
StudiesList.defaultProps = {
  studies: [],
};

const mapStateToProps = ({ app }) => {
  const { studies } = app;

  return { studies };
};
export default connect(mapStateToProps, { updateStudies })(StudiesList);
