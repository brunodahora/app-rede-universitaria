import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import HTMLView from 'react-native-htmlview';
import Reactotron from 'reactotron-react-native';
import styles from './styles';

const StudyItem = props => (
  <View style={[styles.container, styles.item]}>
    <Text style={styles.listTitle}>{props.study.title.rendered}</Text>
    <HTMLView value={props.study.excerpt.rendered} />
  </View>
);
StudyItem.propTypes = {
  study: PropTypes.shape({
    title: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }).isRequired,
    excerpt: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default StudyItem;
