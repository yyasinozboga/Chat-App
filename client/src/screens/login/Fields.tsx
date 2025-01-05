import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React from 'react';
import normalize from '../../utils/helper';
import {Formik} from 'formik';

const Fields = ({selected}: {selected: string}) => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.inputArea}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={styles.inputArea}
            />
          </View>
          <Pressable onPress={handleSubmit}>
            <Text>Submit</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default Fields;

const styles = StyleSheet.create({
  container: {
    top: normalize(225),
    position: 'absolute',
    width: normalize(327),
    height: normalize(189),
    gap: normalize(16),
  },

  label: {
    fontWeight: 'medium',
    fontSize: normalize(12),
    color: 'grey',
  },

  inputArea: {
    width: '100%',
    height: normalize(46),
    paddingHorizontal: normalize(14),
    paddingVertical: normalize(27),
    borderRadius: normalize(10),
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderColor: 'lightgrey',
    borderWidth: 1,
  },

  field: {
    gap: normalize(5),
  },
});
