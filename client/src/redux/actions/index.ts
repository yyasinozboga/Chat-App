import {createAsyncThunk} from './../../../node_modules/@reduxjs/toolkit/src/createAsyncThunk';
import api from '../../api/instance';
import {CHATS_URL} from '../../api/urls';
import {getToken} from '../../services/keychain';
import {AddMessage, CreateChat} from '../../types';

export const getChats = createAsyncThunk(
  'chats/getChats',
  async (params: object | undefined, {rejectWithValue}) => {
    try {
      const token = await getToken();

      if (token) {
        const {data} = await api.get(CHATS_URL, {
          params,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return data;
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const getChat = createAsyncThunk(
  'chat',
  async (id: string, {rejectWithValue}) => {
    try {
      const token = await getToken();

      if (token) {
        const {data} = await api.get(`${CHATS_URL}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return data;
      }
    } catch (error: any) {
      rejectWithValue(error.message);
    }
  },
);

export const addChat = createAsyncThunk(
  'chats/addChat',
  async (body: CreateChat, {rejectWithValue}) => {
    try {
      const {data} = await api.post(CHATS_URL, body, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const addMessage = createAsyncThunk(
  'chat/addMessage',
  async (params: AddMessage, {rejectWithValue}) => {
    try {
      const {data} = await api.post(`${CHATS_URL}/${params.id}`, params.body, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
