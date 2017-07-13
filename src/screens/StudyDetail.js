import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';

const StudyDetail = (props) => {
  const { title, content } = props.selectedStudy;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title.rendered}</Text>
      {/*<HtmlText style={styles.bodyText} html={content.rendered} />*/}
    </View>
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
