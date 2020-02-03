import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CountryPicker ,{getAllCountries, getCallingCode } from 'react-native-country-picker-modal';

export default class CountryBox extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <CountryPicker
                    withEmoji withCallingCode
                />
                <Text>{getAllCountries !== undefined }</Text>
                <Text>{getCallingCode !== undefined }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
        paddingTop:10
    },
});
