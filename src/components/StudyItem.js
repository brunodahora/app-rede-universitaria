import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import HTMLView from "react-native-htmlview";
import styles from "./styles";

const StudyItem = (props) => (
  <View style={[styles.container, { padding: 10 }]}>
    <Text style={styles.listTitle}>{props.study.title.rendered}</Text>
    <HTMLView
      value={props.study.content.rendered
        .replace(new RegExp("\\n$"), "")
        .substring(0, 100)}
    />
  </View>
);
StudyItem.propTypes = {
  study: PropTypes.shape({
    title: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default StudyItem;
