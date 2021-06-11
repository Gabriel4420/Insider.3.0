import React from 'react';
import {View} from 'react-native';
import {ContainerButton, Item} from './styles';
import {Feather} from '@expo/vector-icons';



const ListItem = () => {
    return (
        <View>
           <ContainerButton activeOpacity={0.9} onPress={() => alert('modal')}>
                <Feather
                name="link"
                color="#fff"
                size={24}/>
                <Item numberOfLines={1}>https://github.com/</Item>
           </ContainerButton>
        </View>
    )
}

export default ListItem;