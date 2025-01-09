import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../utils/constants';
import {RootStackParamList} from '../types';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Chats from '../screens/chats';
import Chat from '../screens/chat';
import normalize from '../utils/helper';
import {HeaderBackButton} from '@react-navigation/elements';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.login}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={screens.signup} component={Signup} />
      <Stack.Screen
        name={screens.chats}
        component={Chats}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={screens.chat}
        component={Chat}
        options={{
          headerBackTitle: 'Messages',
          header: ({navigation}) => (
            <View style={styles.header}>
              <HeaderBackButton
                label="Messages"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: normalize(150),
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(3),
  },

  backTitle: {
    fontWeight: 'medium',
    fontSize: normalize(15),
  },
});
