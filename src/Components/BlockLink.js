import React from 'react';
import {Text,View} from 'react-native';


export default class BlockLink extends React.PureComponent{
    render(){
        let onPress1 = this.props.onPress1;
        let onPress2 = this.props.onPress2;
        return(
            <View style={styles.blockLink}>
                <Text
                    style={styles.customLink}
                    onPress={onPress1}>
                    {this.props.name1}
                </Text>
                <Text
                    style={styles.customLink}
                    onPress={onPress2}>
                    {this.props.name2}
                </Text>
            </View>
        )
    }
}

const styles = {
    blockLink: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    customLink: {
        paddingVertical: 10,
        color: '#22a4c5',
        fontWeight: 'bold',
    },
}
