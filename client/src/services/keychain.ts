import * as Keychain from 'react-native-keychain';

export const saveToken = async (token: string) => {
  try {
    await Keychain.setGenericPassword('token', token);
    console.log('Token başarıyla kaydedildi!');
  } catch (error) {
    console.error('Token kaydedilirken hata oluştu:', error);
  }
};

export const getToken = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      console.log('Token bulundu:', credentials.password);
      return credentials.password;
    } else {
      console.log('Token bulunamadı!');
      return null;
    }
  } catch (error) {
    console.error('Token alınırken hata oluştu:', error);
    return null;
  }
};
