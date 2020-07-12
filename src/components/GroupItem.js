import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const clearHtml = (string) => string.replace("&#8211;", "-");

const GroupItem = (props) => (
  <View style={[styles.container, { padding: 10 }]}>
    <Text style={styles.listTitle}>{clearHtml(props.group.nome)}</Text>
  </View>
);
GroupItem.propTypes = {
  group: PropTypes.shape({
    acf: PropTypes.shape({
      nome: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default GroupItem;
