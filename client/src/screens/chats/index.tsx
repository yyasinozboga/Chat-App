import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ChatType} from '../../types';
import {getChats} from '../../api/verbs';
import {Avatar, List} from 'react-native-paper';

type Props = {
  email: string;
  chats: ChatType[];
};

const Chats = () => {
  const [data, setData] = useState<null | Props>(null);

  const fetchChats = async () => {
    const chats = await getChats();

    setData(chats);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const getFullName = (chat: ChatType) => {
    if (data) {
      const user = chat.users.find(user => user.email !== data.email);
      const fullName = (user?.name as string) + ' ' + user?.surname;

      return fullName;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {data && (
        <FlatList
          data={data.chats}
          renderItem={({item}) => (
            <List.Item
              title={getFullName(item)}
              left={() => <Avatar.Text label={getFullName(item) as string} />}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Chats;

const styles = StyleSheet.create({});
