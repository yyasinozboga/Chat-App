import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React from 'react';
import normalize from '../../utils/helper';
import {Formik} from 'formik';
import {loginUser} from '../../api/verbs';

type InitalValuesTypes = {
  email: string;
  password: string;
  name: string;
  surname: string;
  confirmPassword: string;
};

const Fields = ({selected}: {selected: string}) => {
  const initialValues: InitalValuesTypes = {
    email: '',
    password: '',
    name: '',
    surname: '',
    confirmPassword: '',
  };

  const handleSubmit = async (values: InitalValuesTypes) => {
    if (selected === 'login') {
      const body = {email: values.email, password: values.password};

      console.log(body);

      await loginUser(body);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          {selected === 'signup' && (
            <View style={styles.nameContainer}>
              <View style={[styles.field, {width: normalize(155.5)}]}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  style={styles.inputArea}
                  autoCapitalize="none"
                />
              </View>

              <View style={[styles.field, {width: normalize(155.5)}]}>
                <Text style={styles.label}>Surname</Text>
                <TextInput
                  onChangeText={handleChange('surname')}
                  onBlur={handleBlur('surname')}
                  value={values.surname}
                  style={styles.inputArea}
                  autoCapitalize="none"
                />
              </View>
            </View>
          )}

          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.inputArea}
              inputMode="email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={styles.inputArea}
              // secureTextEntry
              autoCapitalize="none"
            />
          </View>

          {selected === 'signup' && (
            <View style={styles.field}>
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                style={styles.inputArea}
                secureTextEntry
                autoCapitalize="none"
              />
            </View>
          )}

          <Pressable style={styles.button} onPress={() => handleSubmit()}>
            <Text style={styles.buttonText}>
              {selected === 'login' ? 'Submit' : 'Register'}
            </Text>
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
    borderRadius: normalize(10),
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderColor: 'lightgrey',
    borderWidth: 1,
  },

  field: {
    gap: normalize(5),
  },

  button: {
    width: normalize(327),
    height: normalize(48),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(10),
    backgroundColor: '#1D61E7',
    borderRadius: normalize(10),
  },

  buttonText: {
    fontSize: normalize(14),
    fontWeight: 'medium',
    color: '#ffffff',
  },

  nameContainer: {
    flexDirection: 'row',
    gap: normalize(16),
    width: normalize(327),
    height: normalize(69),
  },
});
