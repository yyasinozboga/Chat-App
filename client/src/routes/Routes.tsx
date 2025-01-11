import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../utils/constants';
import {RootStackParamList} from '../types';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Chats from '../screens/chats';
import Chat from '../screens/chat';
import CustomHeader from '../components/customHeader';

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
          headerSearchBarOptions: {
            placeholder: 'Search',
          },

          headerShadowVisible: false,
          headerTitle: 'Messages',
          headerLargeTitle: true,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name={screens.chat}
        component={Chat}
        options={{
          headerBackTitle: 'Messages',
          header: () => <CustomHeader />,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
