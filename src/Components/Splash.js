import React from 'react';
import { View, Text } from 'react-native';

export default class SplashScreen extends React.Component {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        )
    }
    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
            this.props.navigation.navigate('App');
        }
    }
    render() {
        return (
            <View style={styles.viewStyles}>
                <View style={styles.BlockStyle}>
                    <Text style = {styles.Logo}>Logo GratIoT</Text>
                </View>
                <View>
                    <Text style={styles.textStyles}>
                        Kết nối mọi vật thật dễ dàng
                    </Text>
                </View>
            </View>
        );
    }
}
const styles = {
    BlockStyle:{
        backgroundColor : '#DCDCDC',
        borderRadius : 2,
        height :50,
        width :150,
        alignItems: 'center',
    },
    Logo:{
        textAlign:'center',
        color: '#1E90FF',
        paddingTop: 15
    },
    viewStyles: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        flexDirection : 'column',
        paddingTop : 200
    },
    textStyles: {
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold'
    }
}
