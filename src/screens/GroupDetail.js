import React from "react";
import { View, Text, ScrollView } from "react-native";
import PropTypes from "prop-types";
import HTMLView from "react-native-htmlview";
import { connect } from "react-redux";
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
      apresentacao_do_grupo,
      instagram,
      whatsapp,
      logo_do_grupo,
    },
  } = props.selectedGroup;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={[styles.container, { padding: 10 }]}>
        <Text style={[styles.headerText, { marginBottom: 20 }]}>
          {clearHtml(nome)}
        </Text>
        {logo_do_grupo && (
          <Image
            style={styles.logo}
            source={{
              uri: logo_do_grupo.url,
            }}
          />
        )}
        <HTMLView value={apresentacao_do_grupo} />
        <Text style={[styles.labelText, { marginBottom: 20 }]}>
          Faculdade / Universidade
        </Text>
        <Text style={[styles.bodyText, { marginBottom: 20 }]}>
          {faculdade__universidade}
        </Text>
        <Text style={[styles.labelText, { marginBottom: 20 }]}>
          Dia da semana
        </Text>
        <Text style={[styles.bodyText, { marginBottom: 20 }]}>
          {dia_da_semana}
        </Text>
        <Text style={[styles.labelText, { marginBottom: 20 }]}>Horário</Text>
        <Text style={[styles.bodyText, { marginBottom: 20 }]}>{horario}</Text>
        {whatsapp && (
          <React.Fragment>
            <Text style={[styles.labelText, { marginBottom: 20 }]}>
              Whatsapp
            </Text>
            <Text style={[styles.bodyText, { marginBottom: 20 }]}>
              {whatsapp}
            </Text>
          </React.Fragment>
        )}
        {instagram && (
          <React.Fragment>
            <Text style={[styles.labelText, { marginBottom: 20 }]}>
              Instagram
            </Text>
            <Text style={[styles.bodyText, { marginBottom: 20 }]}>
              {instagram}
            </Text>
          </React.Fragment>
        )}
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
