import {createSlice} from '@reduxjs/toolkit';
import {Data} from '../../types';
import {addChat, getChats} from '../actions';

interface Chats {
  isLoading: boolean;
  error: null | string;
  data: null | Data;
}

const initialState: Chats = {
  isLoading: false,
  error: null,
  data: null,
};

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getChats.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(getChats.rejected, (state, {error}) => {
      state.isLoading = false;
      state.error = error.message as string;
    });

    builder.addCase(getChats.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.data = payload;
    });

    builder.addCase(addChat.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(addChat.rejected, (state, {error}) => {
      state.isLoading = false;
      state.error = error.message as string;
    });

    builder.addCase(addChat.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.data?.chats.push(payload);
    });
  },
});

export default chatsSlice.reducer;
