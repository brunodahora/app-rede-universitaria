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

const StudyDetail = (props) => {
  const { title, content } = props.selectedStudy;

  return (
    <ScrollView>
      <View style={[styles.container, { padding: 10 }]}>
        <Text style={[styles.headerText, { marginBottom: 20 }]}>{title.rendered}</Text>
        <HTMLView value={content.rendered} />
      </View>
    </ScrollView>
  );
};
StudyDetail.propTypes = {
  selectedStudy: PropTypes.shape({
    title: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = ({ app }) => {
  const { selectedStudy } = app;

  return { selectedStudy };
};
export default connect(mapStateToProps)(StudyDetail);
