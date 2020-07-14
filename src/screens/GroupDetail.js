import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import PropTypes from "prop-types";
import HTMLView from "react-native-htmlview";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import styles from "./styles";

const clearHtml = (string) => string.replace("&#8211;", "-");

const GroupDetail = (props) => {
  const {
    acf: {
      nome,
      apresentacao_do_grupo,
      faculdade__universidade,
      horario,
      dia_da_semana,
      instagram,
      whatsapp,
      logo_do_grupo,
    },
  } = props.selectedGroup;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={[styles.container, { padding: 10, flexDirection:"column", paddingTop:0 }]}>
        {logo_do_grupo && (
          <Image
            style={styles.logo}
            source={{
              uri: logo_do_grupo.url,
            }}
          />
        )}
        <Text style={[styles.headerText, { marginBottom: 10 }]}>
          {clearHtml(nome)}
        </Text>
        <HTMLView value={apresentacao_do_grupo} />
        <Text style={[styles.labelTextGroup]}>Onde?</Text>
        <Text style={[styles.subTitle]}>( Faculdade/Universidade )</Text>
        <Text
          style={[styles.bodyTextGroup, styles.centerText]}
        >
          {faculdade__universidade}
        </Text>
        <Text style={[styles.labelTextGroup]}>
          Quando?
        </Text>
        <Text style={[styles.bodyTextGroup]}>
          {dia_da_semana}
        </Text>
        <Text style={[styles.labelTextGroup]}>Que horas?</Text>
        <Text style={[styles.bodyTextGroup, { marginBottom: 10 }]}>{horario}</Text>
        {!isEmpty(whatsapp) && (
          <React.Fragment>
            <Text style={[styles.labelTextGroup, { marginBottom: 20 }]}>
              Whatsapp
            </Text>
            <Text style={[styles.bodyTextGroup, { marginBottom: 20 }]}>
              {whatsapp}
            </Text>
          </React.Fragment>
        )}
        {!isEmpty(instagram) && (
          <React.Fragment>
            <Text style={[styles.labelTextGroup, { marginBottom: 20 }]}>
              Instagram
            </Text>
            <Text style={[styles.bodyTextGroup, { marginBottom: 20 }]}>
              {instagram}
            </Text>
          </React.Fragment>
        )}
        <Image
            resizeMode="contain"
            style={{ height: 200, margin: 10 }}
            source={require('../assets/imgs/group-persons.png')}
        />
      </View>
    </ScrollView>
  );
};
GroupDetail.propTypes = {
  selectedGroup: PropTypes.shape({
    acf: PropTypes.shape({
      nome: PropTypes.string.isRequired,
      apresentacao_do_grupo: PropTypes.string.isRequired,
      faculdade__universidade: PropTypes.string.isRequired,
      horario: PropTypes.string.isRequired,
      dia_da_semana: PropTypes.string.isRequired,
      apresentacao_do_grupo: PropTypes.string.isRequired,
      instagram: PropTypes.string,
      whatsapp: PropTypes.string,
      logo_do_grupo: PropTypes.shape({
        url: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = ({ app }) => {
  const { selectedGroup } = app;

  return { selectedGroup };
};
export default connect(mapStateToProps)(GroupDetail);
