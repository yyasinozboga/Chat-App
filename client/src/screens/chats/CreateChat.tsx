import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Button, Dialog, Portal} from 'react-native-paper';
import {Formik} from 'formik';
import normalize from '../../utils/helper';
import {addChat} from '../../api/verbs';

type Props = {
  isVisible: boolean;
  close: () => void;
};

type InitialValuesType = {
  name: string;
  surname: string;
  email: string;
};

const CreateChat = ({isVisible, close}: Props) => {
  const initialValues: InitialValuesType = {
    name: '',
    surname: '',
    email: '',
  };

  const handleSubmit = async (values: InitialValuesType) => {
    await addChat(values);
    close();
  };

  return (
    <Portal>
      <Dialog
        style={{height: normalize(280)}}
        visible={isVisible}
        onDismiss={close}>
        <Dialog.Title>New Chat</Dialog.Title>
        <Dialog.Content>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View style={{gap: normalize(10)}}>
                <TextInput
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  style={styles.input}
                  placeholder="name"
                  autoCapitalize="none"
                />

                <TextInput
                  onChangeText={handleChange('surname')}
                  onBlur={handleBlur('surname')}
                  value={values.surname}
                  style={styles.input}
                  placeholder="surname"
                  autoCapitalize="none"
                />

                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  style={styles.input}
                  placeholder="email"
                  inputMode="email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                <Dialog.Actions style={{width: normalize(305)}}>
                  <Button onPress={() => handleSubmit()}>Create</Button>
                  <Button onPress={close}>Cancel</Button>
                </Dialog.Actions>
              </View>
            )}
          </Formik>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default CreateChat;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ffffff',
    color: '#000000',
    height: normalize(45),
    width: '100%',
    borderRadius: normalize(10),
    borderWidth: 1,
    borderColor: 'lightgrey',
    paddingHorizontal: normalize(10),
  },
});
