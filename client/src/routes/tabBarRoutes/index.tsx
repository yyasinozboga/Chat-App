import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../../types';
import {screens} from '../../utils/constants';
import Chats from '../../screens/chats';
import Profile from '../../screens/profile';

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabBarRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={screens.chats} component={Chats} />
      <Tab.Screen name={screens.profile} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabBarRoutes;
