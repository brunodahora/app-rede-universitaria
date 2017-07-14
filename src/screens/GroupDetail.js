import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import HTMLView from 'react-native-htmlview';
import { connect } from 'react-redux';
import styles from './styles';

const clearHtml = string => string.replace('&#8211;', '-');

const GroupDetail = (props) => {
  const { title, content } = props.selectedGroup;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={[styles.container, { padding: 10 }]}>
        <Text style={[styles.headerText, { marginBottom: 20 }]}>
          {clearHtml(title.rendered)}
        </Text>
        <HTMLView value={content.rendered} />
      </View>
    </ScrollView>
  );
};
GroupDetail.propTypes = {
  selectedGroup: PropTypes.shape({
    title: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = ({ app }) => {
  const { selectedGroup } = app;

  return { selectedGroup };
};
export default connect(mapStateToProps)(GroupDetail);
