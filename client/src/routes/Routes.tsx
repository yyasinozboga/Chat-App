import {View, Text, Pressable, StyleSheet} from 'react-native';
import React, {ReactElement} from 'react';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {screens} from '../utils/constants';
import {ChatType, RootStackParamList} from '../types';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Chats from '../screens/chats';
import Chat from '../screens/chat';
import normalize, {getFullName} from '../utils/helper';
import {HeaderBackButton} from '@react-navigation/elements';
import {useTheme} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import ArrowRight from '../assets/icons/ArrowRight';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  const {colors} = useTheme();

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
          header: ({navigation, route}) => (
            <View style={styles.header}>
              <HeaderBackButton
                label="Messages"
                onPress={() => navigation.goBack()}
                tintColor={colors.primary}
              />

              <View style={styles.avatarContainer}>
                <Avatar.Text
                  label={getFullName(
                    route.params.chat,
                    true,
                    route.params.user_id,
                  )}
                  size={50}
                />

                <View style={styles.avatar}>
                  <Text style={styles.name}>
                    {getFullName(
                      //@ts-ignore
                      route.params.chat,
                      false,
                      //@ts-ignore
                      route.params.user_id,
                    )}
                  </Text>

                  <Pressable>
                    <ArrowRight width={normalize(15)} height={normalize(15)} />
                  </Pressable>
                </View>
              </View>
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
    justifyContent: 'space-between',
    height: normalize(150),
    width: normalize(235),
  },

  avatarContainer: {
    marginTop: normalize(40),
    alignItems: 'center',
    gap: normalize(10),
  },

  avatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    fontSize: normalize(11),
    fontWeight: 'regular',
  },
});
