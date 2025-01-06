import {SignUpBodyType, LoginBodyType, UserType} from '../types';
import {CHATS_URL, LOGIN_URL, SIGNUP_URL, USERS_URL} from './urls';
import {getToken, saveToken} from '../services/keychain';
import api from './instance';

export const createUser = async (body: SignUpBodyType) => {
  const token: string = await api.post(SIGNUP_URL, body).then(res => res.data);

  saveToken(token);
};

export const loginUser = async (body: LoginBodyType) => {
  const token: string = await api.post(LOGIN_URL, body).then(res => res.data);

  if (token) {
    await saveToken(token);
  }
};

export const getChats = async () => {
  const token = await getToken();

  if (token) {
    const results = await api.get(CHATS_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return results.data;
  }
};

export const getUser = async (email: string) => {
  const user: UserType = await api
    .get(`${USERS_URL}/${email}`)
    .then(res => res.data);

  return user;
};
