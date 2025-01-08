import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ChatStore, RootStackParamList} from '../../types';
import {AppDispatch} from '../../redux/store';
import {getChat} from '../../redux/actions';
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

  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error!</Text>
      ) : (
        chat?.messages && (
          <GiftedChat
            messages={chat?.messages}
            user={{_id: route.params.user_id}}
          />
        )
      )}
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({});
