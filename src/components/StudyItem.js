import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const StudyItem = (props) => (
  <View style={[styles.container, { padding: 10 }]}>
    <Text style={styles.listTitle}>{props.study.title.rendered}</Text>
    <Text style={styles.listContent}>
      {props.study.content.rendered
        .replace(new RegExp("\\n$"), "")
        .replace(/<[^>]*>?/gm, "")
        .substring(0, 100)}
    </Text>
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
