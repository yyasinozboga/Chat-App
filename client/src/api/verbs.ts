import axios from 'axios';
import {BodyType, UserType} from '../types';
import {SIGNUP_URL} from './urls';
import {saveToken} from '../services/keychain';

export const createUser = async (body: BodyType) => {
  const results: UserType = await axios.post(SIGNUP_URL, body);

  saveToken(results.token);
};
