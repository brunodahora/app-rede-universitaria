import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import styles from './styles';

/* eslint-disable global-require */
const About = () => (
  <ScrollView>
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={{ height: 200, margin: 10 }}
        source={require('../assets/imgs/logo.png')}
      />
      <Text style={styles.headerText}>
        {'Missão, Valores e Visão'}
      </Text>
      <Text style={[styles.bodyText, styles.justifyText, { margin: 10 }]}>
        {'A história de boa parte dos trabalhos com jovens cristãos nas universidades tem uma tendência de começar muito bem, mas com o tempo, ir enfraquecendo até os alunos que participam se formarem, ou o projeto simplesmente fechar. Salvo, claro algumas excessões.'}
        {'\n\n'}
        {'Hoje em algumas universidades existem diversos projetos de trabalho com jovens cristãos de diferentes denominações no mesmo campus. Entendemos que não precisamos competir no Reino de Deus, mas sim cooperar para alcançar as universidades. Uma igreja, ou até uma denominação sozinha pode fazer um trabalho muito bom. Mas diversas igrejas de denominações diferentes em unidade podem fazer um trabalho fantástico. Ao deixar um pouco de lado alguns dogmas e focar naquilo que realmente nos une.'}
        {'\n\n'}
        {'Por isso, a Missão da Rede Universitária é juntar jovens estudantes cristãos de diferentes denominações que estudam dentro de uma mesma universidade para gerar unidade e ao mesmo tempo para transformar a realidade das universidades com os valores que a Palavra de Deus nos apresenta. E assim mostrar um caminho ainda melhor para os estudantes cristãos e não cristãos que estão na fase da universidade para transformar a realidade das universidades em nosso país.'}
      </Text>
    </View>
  </ScrollView>
);

export default About;
