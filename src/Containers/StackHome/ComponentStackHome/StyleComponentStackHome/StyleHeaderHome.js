import {Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
export const styleHeaderHome = {
  contaner: {
    height: 70,
    backgroundColor: '#D3D3D3',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  containerSub1: {
    height: '40%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  containerHouse: {
    flexDirection: 'row',
    width: (screenWidth / 100) * 33,
    marginLeft: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHouse: {fontSize: 20, fontWeight: 'bold'},
  iconHouse: {marginLeft: 5, fontSize: 20},
  containerButton: {
    backgroundColor: '#1291b6',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  iconButton: {fontSize: 30, color: 'white'},
  containerSub2: {
    height: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconWeather: {fontSize: 35, marginLeft: 10, color: 'orange'},
  textWeather: {fontWeight: 'bold'},
  containerPeople: {
    backgroundColor: '#FF6666',
    alignItems: 'center',
    borderRadius: 2,
    // paddingHorizontal: 5,
    marginLeft: 50,
  },
  containerAir: {marginRight: 15},
  textAir: {fontWeight: 'bold'},
};
