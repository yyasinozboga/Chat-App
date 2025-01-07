import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ChatType} from '../../types';
import {getChats} from '../../api/verbs';
import normalize from '../../utils/helper';
import Card from '../../components/card';
import Header from './Header';
import Plus from '../../assets/icons/Plus';
import CreateChat from './CreateChat';

type Props = {
  email: string;
  chats: ChatType[];
};

const Chats = () => {
  const [data, setData] = useState<null | Props>(null);
  const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false);

  const fetchChats = async () => {
    const chats = await getChats();

    setData(chats);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header />
      {data && (
        <FlatList
          style={styles.container}
          data={data.chats}
          renderItem={({item}) => <Card chat={item} email={data.email} />}
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
