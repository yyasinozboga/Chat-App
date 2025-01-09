import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ChatStore,
  ChatType,
  MessageType,
  RootStackParamList,
} from '../../types';
import {AppDispatch} from '../../redux/store';
import {addMessage, getChat} from '../../redux/actions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GiftedChat} from 'react-native-gifted-chat';
import {useFocusEffect} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import {getFullName} from '../../utils/helper';

type Props = NativeStackScreenProps<RootStackParamList, 'chat'>;

const Chat = ({route, navigation}: Props) => {
  const {isLoading, error, chat} = useSelector(
    (store: ChatStore) => store.chat,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getChat(route.params.id));
  }, []);

  const onSend = useCallback((messages: MessageType[]) => {
    dispatch(addMessage({id: route.params.id, body: messages[0]}));
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () =>
        chat && (
          <Avatar.Text
            label={getFullName(chat as ChatType, true, route.params.user_id)}
            size={25}
          />
        ),
    });
  }, [chat]);

  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error!</Text>
      ) : (
        chat &&
        chat.messages && (
          <GiftedChat
            messages={[...chat.messages].reverse()}
            onSend={messages => onSend(messages as MessageType[])}
            user={{_id: route.params.user_id}}
          />
        )
      )}
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({});
