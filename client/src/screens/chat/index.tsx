import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ChatStore, MessageType, RootStackParamList} from '../../types';
import {AppDispatch} from '../../redux/store';
import {addMessage, getChat} from '../../redux/actions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GiftedChat} from 'react-native-gifted-chat';

type Props = NativeStackScreenProps<RootStackParamList, 'chat'>;

const Chat = ({route}: Props) => {
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

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
