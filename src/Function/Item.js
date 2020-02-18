import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import hp_wall from '../Picture/hp_wall.png';
import Icon from 'react-native-vector-icons/AntDesign';
export default function Item({title}) {
  return (
    <TouchableOpacity
      style={{
        marginVertical: 10,
        marginHorizontal: 15,
        width: 150,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 3,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      }}>
      <Text
        style={{
          marginBottom: 5,
          backgroundColor: '#DCDCDC',
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}>
        {title}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image source={hp_wall} style={{width: 70, height: 60}} />
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 0.5,
            borderColor: 'gray',
          }}>
          <Icon name={'poweroff'} size={30} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
// <View >
//     {this.state.DATA != null ? <FlatList
//         onEndReachedThreshold={0.5}
//         numColumns={Math.floor(screenWidth/160)}
//         data={[...this.state.DATA,'item']}
//         renderItem={({ item, index }) => (index > this.state.DATA.length-1 ?<AddDevice/>:<ListDevice title={item.deviceName}/>)} /> : null}
// </View>
