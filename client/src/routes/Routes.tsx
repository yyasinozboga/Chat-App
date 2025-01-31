import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../utils/constants';
import {RootStackParamList} from '../types';
import Login from '../screens/login';
import Chat from '../screens/chat';
import CustomHeader from '../components/customHeader';
import TabBarRoutes from './tabBarRoutes';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={({route}) => {
        const focusedRouteName = getFocusedRouteNameFromRoute(route);

        return {
          headerShown:
            focusedRouteName !== screens.profile &&
            focusedRouteName !== screens.login
              ? true
              : false,
        };
      }}>
      <Stack.Screen
        name={screens.login}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={screens.home}
        component={TabBarRoutes}
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
