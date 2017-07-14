import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const clearHtml = string => string.replace('&#8211;', '-');

const GroupItem = props => (
  <View style={[styles.container, { padding: 10 }]}>
    <Text style={styles.listTitle}>{clearHtml(props.group.title.rendered)}</Text>
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
