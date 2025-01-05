import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import normalize from '../../utils/helper';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started Now</Text>

      <Text style={styles.text}>
        Create an account or log in to explore about our app
      </Text>
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  container: {
    width: normalize(327),
    position: 'absolute',
    top: normalize(51),
    height: normalize(90),
    gap: normalize(12),
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: normalize(32),
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text: {
    fontSize: normalize(12),
    fontWeight: 'regular',
    color: 'grey',
    width: normalize(222),
    height: normalize(36),
    textAlign: 'center',
  },
});
