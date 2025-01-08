import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar, Divider, List} from 'react-native-paper';
import {ChatType, RootStackParamList} from '../../types';
import normalize from '../../utils/helper';
import ArrowRight from '../../assets/icons/ArrowRight';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {screens} from '../../utils/constants';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Card = ({chat, id}: {chat: ChatType; id: string}) => {
  const navigation = useNavigation<NavigationProp>();

  const getFullName = (chat: ChatType, firstLetter?: boolean) => {
    const user = chat.users.find(user => user.user_id !== id);
    const fullName = user?.name + ' ' + user?.surname;

    if (firstLetter) {
      const firstLetterOfName = user?.name.charAt(0) as string;
      const firstLetterOfSurname = user?.surname.charAt(0);

      return firstLetterOfName + firstLetterOfSurname;
    }

    return fullName;
  };

  const time = new Date(
    chat.messages[chat.messages.length - 1]?.createdAt,
  ).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: undefined,
  });

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(screens.chat, {id: chat._id, user_id: id})
      }
      style={styles.item}>
      <List.Item
        title={() => (
          <View style={styles.textContainer}>
            <Text>{getFullName(chat)}</Text>
            <View style={styles.itemRight}>
              <Text style={styles.time}>{time !== 'Invalid Date' && time}</Text>
              <ArrowRight width={normalize(20)} height={normalize(20)} />
            </View>
          </View>
        )}
        description={chat.messages[chat.messages.length - 1]?.text}
        style={{height: normalize(76)}}
        left={() => (
          <Avatar.Text
            labelStyle={styles.text}
            label={getFullName(chat, true)}
            size={normalize(45)}
          />
        )}
      />

      <Divider />
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  item: {
    height: normalize(76),
    paddingHorizontal: normalize(10),
  },

  text: {
    fontSize: normalize(18),
  },

  itemRight: {
    flexDirection: 'row',
    gap: normalize(3),
    alignItems: 'center',
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  time: {
    fontWeight: 'regular',
    color: 'grey',
    fontSize: normalize(12),
  },
});
