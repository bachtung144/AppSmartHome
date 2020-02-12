import {AsyncStorage} from 'react-native';

export const _storeData = async (Token, data) => {
  try {
    await AsyncStorage.setItem(Token, data);
  } catch (error) {
    console.log('AsyncStorage save error: ' + error.message);
  }
};
