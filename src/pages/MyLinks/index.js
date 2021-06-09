import React from 'react';
import {View, Text} from 'react-native';
import StatusBarPage from '../../components/StatusBarPage';

const MyLinks = () => {
    return (
        <View>
            <StatusBarPage 
             barStyle="light-content"
             backgroundColor="#132742"/>
            <Text>MyLinks</Text>
        </View>
    )
}

export default MyLinks;