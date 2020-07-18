import React from 'react';
import {
  View,
  Text,
  ScrollView, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import HTMLView from 'react-native-htmlview';
import { connect } from 'react-redux';
import styles from './styles';

const StudyDetail = (props) => {
  const { title, content } = props.selectedStudy;

  return (
   <View style={styles.container}>
     <ScrollView>
       <Text style={[styles.headerText, { marginBottom: 30, marginTop: 30 }]}>{title.rendered}</Text>
       <View style={[styles.container, { padding: 10 }]}>
         <HTMLView stylesheet={[styles.bodyTextAbout, styles.justifyContent, { margin: 40 }]}
                   value={content.rendered} />
       </View>
     </ScrollView>
     <View >
       <Image
           resizeMode="contain"
           style={{ height: 150, margin: 10}}
           source={require('../assets/imgs/study-person.jpeg')}
       /></View>
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
