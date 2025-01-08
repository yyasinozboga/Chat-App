import {createSlice} from '@reduxjs/toolkit';
import {ChatType} from '../../types';
import {getChat} from '../actions';

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
  },
});

export default chatSlice.reducer;
