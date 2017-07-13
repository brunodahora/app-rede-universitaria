import React from 'react';
import {
  View,
  Text,
  WebView
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const StudyItem = props => (
  <View style={styles.container}>
    <Text style={styles.listTitle}>{props.study.title.rendered}</Text>
    {/* <WebView source={{html: props.study.excerpt.rendered}} /> */}
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
