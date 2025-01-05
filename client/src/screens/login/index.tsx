import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from './Header';
import normalize from '../../utils/helper';
import Tabbing from './Tabbing';
import Fields from './Fields';

const Login = () => {
  const [selected, setSelected] = useState('login');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Header />
        <Tabbing selected={selected} setSelected={setSelected} />
        <Fields selected={selected} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: normalize(68),
    left: normalize(24),
  },
});
