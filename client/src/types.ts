export type RootStackParamList = {
  login: undefined;
  signup: undefined;
  chats: undefined;
  chat: {id: string; user_id: string; chat: ChatType};
  profile: {id: string};
  home: undefined;
};

export type SignUpBodyType = {
  name: string;
  surname: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export type LoginBodyType = {
  email: string;
  password: string;
};

export type MessageType = {
  text: string;
  user: {
    _id: string;
  };
  createdAt: Date;
  _id: string;
};

export type ChatType = {
  _id: string;
  user_id: string;
  users: [
    {name: string; surname: string; _id: string; user_id: string},
    {name: string; surname: string; _id: string; user_id: string},
  ];
  messages: MessageType[];
};

export type UserType = {
  _id: string;
  name: string;
  surname: string;
  email: string;
};

export type CreateChat = {
  name: string;
  surname: string;
  email: string;
};

export interface Data {
  user_id: string;
  chats: ChatType[];
}

export type ChatsStore = {
  chats: {
    isLoading: boolean;
    error: null | string;
    data: null | Data;
  };
};

export type ChatStore = {
  chat: {
    isLoading: boolean;
    error: null | string;
    chat: null | ChatType;
  };
};

export type AddMessage = {
  id: string;
  body: MessageType;
};
