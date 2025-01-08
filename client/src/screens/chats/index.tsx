import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ChatsStore, ChatType} from '../../types';
import normalize from '../../utils/helper';
import Card from '../../components/card';
import Header from './Header';
import Plus from '../../assets/icons/Plus';
import CreateChat from './CreateChat';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {getChats} from '../../redux/actions';

const Chats = () => {
  const {isLoading, error, data} = useSelector(
    (store: ChatsStore) => store.chats,
  );
  const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getChats());
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header />
      {data && (
        <FlatList
          style={styles.container}
          data={data.chats}
          renderItem={({item}) => <Card chat={item} id={data.user_id} />}
        />
      )}
      <Pressable onPress={() => setIsDialogVisible(true)} style={styles.button}>
        <Plus width={normalize(30)} height={normalize(30)} />
      </Pressable>

      <CreateChat
        isVisible={isDialogVisible}
        close={() => setIsDialogVisible(false)}
      />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    width: normalize(390),
    position: 'absolute',
    top: normalize(195),
    backgroundColor: '#ffffff',
    height: '100%',
  },

  button: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(50),
    position: 'absolute',
    bottom: normalize(50),
    right: normalize(20),
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
