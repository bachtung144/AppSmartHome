// import React, {Component} from 'react';
// import {
//   Text,
//   FlatList,
//   SafeAreaView,
//   View,
//   ActivityIndicator,
//     Button
// } from 'react-native';
// import io from 'socket.io-client';
// import Item from '../StackHome/ComponentStackHome/Item';
// import {emit} from '../../Socket/_Socket';
//
// export default class Device extends Component {
//   constructor(props) {
//     super(props);
//     this.page = 1;
//     this.state = {
//       DATA: [],
//       page: 1,
//       isLoading: false,
//     };
//   }
//   getResponse = async response => {
//     console.warn(JSON.parse(response).data)
//     if(this.state.page ===2) return ;
//     await this.setState({
//       DATA: this.state.DATA.concat(JSON.parse(response).data),
//       isLoading: false,
//     });
//
//   };
//
//   getData = async () => {
//     emit(
//       'listDevice',
//       JSON.stringify({page: this.state.page}),
//     );
//   };
//   componentDidMount() {
//     this.setState({isLoading: true}, this.getData);
//   }
//
//   handleLoadMore = async () => {
//     await this.setState(
//       {page: this.state.page + 1, isLoading: true},
//       this.getData,
//     );
//   };
//
//   renderFooter = () => {
//     return this.state.isLoading ? (
//       <View>
//         <ActivityIndicator size={'large'} />
//       </View>
//     ) : null;
//   };
//
//   render() {
//
//     if (this.state.DATA === null) {
//       return (
//         <View>
//           <Text>Loading</Text>
//         </View>
//       );
//     }
//     return (
//       <SafeAreaView>
//         <FlatList
//           data={this.state.DATA}
//           renderItem={({item}) => (
//             <Item
//               title={item.deviceName}
//               onPress={() => console.warn('hello')}
//             />
//           )}
//           keyExtractor={item => item.id}
//           numColumns={2}
//           onEndReached={this.handleLoadMore}
//           onEndReachedThreshold={0}
//           ListFooterComponent={this.renderFooter}
//         />
//         <Button title={'test'} onPress={() => console.warn(this.state.DATA)}/>
//       </SafeAreaView>
//     );
//   }
// }
