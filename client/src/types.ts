export type RootStackParamList = {
  login: undefined;
  signup: undefined;
  chats: undefined;
  chat: {id: string};
};

export type SignUpBodyType = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export type LoginBodyType = {
  email: string;
  password: string;
};

export type MessageType = {
  message: string;
  user_id: string;
  createdAt: string;
  _id: string;
};

export type ChatType = {
  _id: string;
  email: string;
  users: [
    {name: string; surname: string; _id: string; email: string},
    {name: string; surname: string; _id: string; email: string},
  ];
  messages: MessageType[];
};

export type UserType = {
  _id: string;
  name: string;
  surname: string;
  email: string;
};
