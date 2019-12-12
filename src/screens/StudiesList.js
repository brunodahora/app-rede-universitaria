import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TextInput
} from "react-native";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import _ from "lodash";

import { updateStudies, selectStudy } from "../store/actions";
import { getStudiesPaginated } from "../helpers/API";
import styles from "./styles";
import { colors } from "../helpers/Constants";

import StudyItem from "../components/StudyItem";

const convert = studies => studies.map(item => ({ ...item, key: item.id }));

class StudiesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: 1,
      lastPage: 1,
      studies: props.studies,
      list: props.studies,
      search: ""
    };

    this.updateStudies = this.updateStudies.bind(this);
    this.selectStudy = this.selectStudy.bind(this);
  }

  componentWillMount() {
    this.updateStudies();
  }

  updateStudies(page = 1) {
    getStudiesPaginated(page).then(studies => {
      const mergedStudies = _.sortBy(
        _.unionWith(convert(studies.data), this.props.studies, _.isEqual),
        "id"
      );
      this.setState({
        pages: studies.headers["x-wp-totalpages"],
        lastPage: page,
        search: this.state.search,
        list: !_.isEmpty(this.state.search)
          ? mergedStudies.filter(item =>
              item.title.rendered
                .toLowerCase()
                .includes(this.state.search.toLowerCase())
            )
          : mergedStudies,
        studies: mergedStudies
      });
      this.props.updateStudies(mergedStudies);
      if (parseInt(studies.headers["x-wp-totalpages"], 10) !== page) {
        const nextPage = page + 1;
        this.updateStudies(nextPage);
      }
    });
  }

  selectStudy(study) {
    const { navigate } = this.props.navigation;

    this.props.selectStudy(study);
    navigate("StudyDetail");
  }

  render() {
    return (
      <View style={styles.container}>
        {_.isEmpty(this.state.studies) && (
          <View style={styles.body}>
            <ActivityIndicator size={"large"} />
            <Text style={[styles.bodyText, styles.centerText]}>
              {"Carregando estudos.\nCaso demore, verifique sua internet."}
            </Text>
          </View>
        )}
        {!_.isEmpty(this.state.studies) && (
          <View>
            <View style={styles.searchbar}>
              <MaterialIcons name="search" size={24} color={colors.gray} />
              <TextInput
                style={{ flex: 1, marginLeft: 5, height: 40 }}
                onChangeText={search => {
                  const list = this.state.studies.filter(item =>
                    item.title.rendered
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  );
                  this.setState({
                    ...this.state,
                    list,
                    search
                  });
                }}
                placeholder="Pesquise pelo título"
                value={this.state.search}
              />
            </View>
            <FlatList
              data={this.state.list}
              ListEmptyComponent={
                <View style={styles.body}>
                  <Text style={[styles.bodyText, styles.centerText]}>
                    {"Nenhum estudo encontrado"}
                  </Text>
                </View>
              }
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: colors.gray
                  }}
                />
              )}
              renderItem={data => (
                <Touchable onPress={() => this.selectStudy(data.item)}>
                  <StudyItem study={data.item} />
                </Touchable>
              )}
            />
          </View>
        )}
      </View>
    );
  }
}
StudiesList.propTypes = {
  studies: PropTypes.array,
  updateStudies: PropTypes.func.isRequired,
  selectStudy: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};
StudiesList.defaultProps = {
  studies: []
};

const mapStateToProps = ({ app }) => {
  const { studies } = app;

  return { studies };
};
export default connect(mapStateToProps, { updateStudies, selectStudy })(
  StudiesList
);
