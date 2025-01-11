import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import normalize, {getFullName} from '../../utils/helper';
import ArrowRight from '../../assets/icons/ArrowRight';
import {Avatar} from 'react-native-paper';
import {HeaderBackButton} from '@react-navigation/elements';
import {
  RouteProp,
  useNavigation,
  useRoute,
  useTheme,
} from '@react-navigation/native';
import {RootStackParamList} from '../../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'chat'>;
type ChatRouteProp = RouteProp<RootStackParamList, 'chat'>;

const CustomHeader = () => {
  const {colors} = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<ChatRouteProp>();

  return (
    <View style={styles.header}>
      <HeaderBackButton
        label="Messages"
        onPress={() => navigation.goBack()}
        tintColor={colors.primary}
      />

      <View style={styles.avatarContainer}>
        <Avatar.Text
          label={getFullName(route.params.chat, true, route.params.user_id)}
          size={50}
        />

        <View style={styles.avatar}>
          <Text style={styles.name}>
            {getFullName(route.params?.chat, false, route.params?.user_id)}
          </Text>

          <Pressable>
            <ArrowRight width={normalize(15)} height={normalize(15)} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;

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
