import {AsyncStorage} from 'react-native';

export const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('Token');
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (error) {
    console.warn('Error');
    return null;
  }
};
