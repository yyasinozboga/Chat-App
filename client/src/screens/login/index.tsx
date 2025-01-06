import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import normalize from '../../utils/helper';
import Tabbing from './Tabbing';
import Fields from './Fields';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import {getToken} from '../../services/keychain';
import {screens} from '../../utils/constants';

type Props = NativeStackScreenProps<RootStackParamList, 'login'>;

const Login = ({navigation}: Props) => {
  const [selected, setSelected] = useState('login');

  const fetchToken = async () => {
    const token = await getToken();

    if (token) {
      navigation.navigate(screens.chats);
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

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
