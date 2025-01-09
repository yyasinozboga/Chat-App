import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import normalize from '../../utils/helper';
import Search from '../../assets/icons/Search';
import Speak from '../../assets/icons/Speak';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <View style={styles.searchField}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="rgba(60, 60, 67, 0.6)"
        />
        <View style={styles.searchBtn}>
          <Search width={normalize(24)} height={normalize(22)} />
        </View>

        <View style={styles.speakBtn}>
          <Speak width={normalize(24)} height={normalize(22)} />
        </View>
      </View>
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  container: {
    width: normalize(390),
    height: normalize(195),
    backgroundColor: '#ffffff',
  },

  title: {
    position: 'absolute',
    top: normalize(92.5),
    left: normalize(16),
    fontWeight: 'bold',
    fontSize: normalize(34),
    color: '#000000',
  },

  searchField: {
    position: 'absolute',
    top: normalize(142.5),
    left: normalize(16),
    width: normalize(340),
    height: normalize(36),
    backgroundColor: 'rgba(118, 118, 128, 0.12)',
    borderRadius: normalize(10),
  },

  input: {
    position: 'absolute',
    left: normalize(46),
    top: normalize(8),
    fontSize: normalize(17),
    fontWeight: 'regular',
    color: 'rgba(60, 60, 67, 0.6)',
  },

  searchBtn: {
    position: 'absolute',
    top: normalize(7),
    left: normalize(15),
  },

  speakBtn: {
    position: 'absolute',
    top: normalize(7),
    left: normalize(310),
  },
});
