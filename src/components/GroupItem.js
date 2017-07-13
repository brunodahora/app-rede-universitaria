import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const GroupItem = props => (
  <View style={styles.container}>
    <Text style={styles.listTitle}>{props.group.title.rendered}</Text>
  </View>
);
GroupItem.propTypes = {
  group: PropTypes.shape({
    title: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }),
    excerpt: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default GroupItem;
