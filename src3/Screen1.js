import React from 'react';
import {FlatList,View,Text,SafeAreaView,TouchableOpacity,StyleSheet,Button} from 'react-native';
import {connect} from 'react-redux';

const checkExist = (id, data) => {
    for (let i = 0; i < data.length; i++) {
        if (id === data.id) {
            return true;
        }
    }
    return false;
};

const filterData = (data1, data2) => {
    let newArr;
    newArr = data1.map(x => {
        if (checkExist(x.id, data2)) {
            return x;
        }
    });
    return newArr;
};

function Item({ name ,onPress}) {
    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <Text >{name}</Text>
        </TouchableOpacity>
    );
}
class Screen1 extends React.Component{
    state={
        newArr:[],
        term : [{id:1,name:'dv1'},{id:2,name:'dv2'},{id:3,name:'dv3'}]
    };

    InitArrayAction(arr1,arr2) {
        let newArr = [];
        arr2.forEach(ele2 => {arr1.forEach(ele1 => {
            if(ele1.id === ele2.id){
                newArr.push(ele2)
            }
        })});
        return newArr;
    }

    componentDidMount(): void {
        this.setState({newArr:this.InitArrayAction(this.state.term, this.props.List)})
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <SafeAreaView >
                <FlatList
                    data={this.state.newArr}
                    renderItem={({ item }) =>
                        <Item name={item.name} onPress={()=>navigate('Screen2',{id:item.id})}/>}
                    keyExtractor={item => item.id }
                />
                <Button title={'testProps'} onPress={() => console.warn(this.props.List)}/>
                <Button title={'testData1'} onPress={() => console.warn(this.state.newArr)}/>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
const mapStateToProps = state => ({
    List : state.List
});

export default connect(
    mapStateToProps,
    null,
)(Screen1);

