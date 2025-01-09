import {createSlice} from '@reduxjs/toolkit';
import {ChatType, MessageType} from '../../types';
import {addMessage, getChat} from '../actions';

interface Chat {
  isLoading: boolean;
  error: null | string;
  chat: null | ChatType;
}

const initialState: Chat = {
  isLoading: false,
  error: null,
  chat: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getChat.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(getChat.rejected, (state, {error}) => {
      state.isLoading = false;
      state.error = error.message as string;
    });

    builder.addCase(getChat.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.chat = payload;
    });

    builder.addCase(addMessage.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(addMessage.rejected, (state, {error}) => {
      state.isLoading = false;
      state.error = error.message as string;
    });

    builder.addCase(addMessage.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      if (state.chat) {
        state.chat = {
          ...state.chat,
          messages: [...state.chat.messages, payload],
        };
      }
    });
  },
});

export default chatSlice.reducer;
