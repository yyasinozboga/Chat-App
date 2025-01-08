import {configureStore} from '@reduxjs/toolkit';
import chatsSlice from './slices/chatsSlice';
import chatSlice from './slices/chatSlice';

const store = configureStore({
  reducer: {
    chats: chatsSlice,
    chat: chatSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
