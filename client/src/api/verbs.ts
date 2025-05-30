import {SignUpBodyType, LoginBodyType, UserType} from '../types';
import {LOGIN_URL, SIGNUP_URL, USERS_URL} from './urls';
import {saveToken} from '../services/keychain';
import api from './instance';
import {AxiosError} from 'axios';

export const createUser = async (body: SignUpBodyType) => {
  try {
    console.log(body);
    const {data} = await api.post(SIGNUP_URL, body);

    saveToken(data.token);
  } catch (error) {
    const err = error as AxiosError;

    console.log(err.response?.data);
  }
};

export const loginUser = async (body: LoginBodyType) => {
  const token: string = await api.post(LOGIN_URL, body).then(res => res.data);

  if (token) {
    await saveToken(token);
  }
};

export const getUser = async (email: string) => {
  const user: UserType = await api
    .get(`${USERS_URL}/${email}`)
    .then(res => res.data);

  return user;
};
