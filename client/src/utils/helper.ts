import {Dimensions, Platform, PixelRatio} from 'react-native';
import {ChatType} from '../types';

export var {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

const wscale: number = SCREEN_WIDTH / 375;
const hscale: number = SCREEN_HEIGHT / 812;

export default function normalize(
  size: number,
  based: 'width' | 'height' = 'width',
) {
  const newSize = based === 'height' ? size * hscale : size * wscale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
}

export const getFullName = (
  chat: ChatType,
  firstLetter: boolean,
  id: string,
) => {
  const user = chat.users.find(user => user.user_id !== id);
  const fullName = user?.name + ' ' + user?.surname;

  if (firstLetter) {
    const firstLetterOfName = user?.name.charAt(0) as string;
    const firstLetterOfSurname = user?.surname.charAt(0);

    return firstLetterOfName + firstLetterOfSurname;
  }

  return fullName;
};
