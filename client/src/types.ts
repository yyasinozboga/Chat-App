export type RootStackParamList = {
  login: undefined;
  signup: undefined;
  chats: undefined;
  chat: {id: string};
};

export type BodyType = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export type UserType = {
  status: string;
  token: string;
  data: {
    user: {
      name: string;
      surname: string;
      email: string;
    };
  };
};
