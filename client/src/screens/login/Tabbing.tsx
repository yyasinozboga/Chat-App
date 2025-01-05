import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import normalize from '../../utils/helper';

type Props = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const Tabbing = ({selected, setSelected}: Props) => {
  const bgLogIn = selected === 'login' ? '#ffffff' : 'transparent';
  const bgSignUp = selected === 'signup' ? '#ffffff' : 'transparent';

  const colorLogIn = selected === 'login' ? '#232447' : '#7D7D91';
  const colorSignUp = selected === 'signup' ? '#232447' : '#7D7D91';

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setSelected('login')}
        style={[styles.box, {backgroundColor: bgLogIn}]}>
        <Text style={[styles.text, {color: colorLogIn}]}>Log In</Text>
      </Pressable>

      <Pressable
        onPress={() => setSelected('signup')}
        style={[styles.box, {backgroundColor: bgSignUp}]}>
        <Text style={[styles.text, {color: colorSignUp}]}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default Tabbing;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: normalize(165),
    width: normalize(327),
    flexDirection: 'row',
    gap: 1,
    alignItems: 'center',
    padding: 2,
    borderRadius: normalize(7),
    backgroundColor: '#F5F6F9',
  },

  box: {
    width: normalize(161),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(14),
    borderRadius: normalize(6),
  },

  text: {
    fontSize: normalize(14),
    fontWeight: 'medium',
  },
});
