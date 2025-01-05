import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../utils/constants';
import {RootStackParamList} from '../types';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Chats from '../screens/chats';
import Chat from '../screens/chat';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.login} component={Login} />
      <Stack.Screen name={screens.signup} component={Signup} />
      <Stack.Screen name={screens.chats} component={Chats} />
      <Stack.Screen name={screens.chat} component={Chat} />
    </Stack.Navigator>
  );
};

export default Routes;
