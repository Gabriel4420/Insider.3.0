import React from 'react';
import {Text, TouchableOpacity, View, TouchableWithoutFeedback, Share} from 'react-native';
import {ModalContainer, 
    Container, 
    Header,
    LinkArea,
    Title, 
    LongURL, 
    ShortLinkArea, 
    ShortLinkURL
} from './styles';

import {Feather} from '@expo/vector-icons';

import Clipboard from 'expo-clipboard';


const ModalLink = ({ onClose , data}) => {

    const copyLink = () => {
        Clipboard.setString(data.link);

        alert('Link Copiado com sucesso')
    }

    const  handleShare = async () => {
        try {
            const result = await Share.share({
                message: `Link: ${data.link}`
            })

            if(result.action === Share.sharedAction)
                if(result.activityType)
                    console.log('Activity Type');
                else
                    console.log('compartilhado com sucesso');
            else if(result.action === Share.dismissedAction)
                console.log('Modal fechado');
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ModalContainer>
            <TouchableWithoutFeedback onPress={onClose}>
            <View style={{flex:1}}></View>
            </TouchableWithoutFeedback>
            <Container>
                <Header>
                    <TouchableOpacity onPress={onClose}>
                        <Feather name="x" color="#212743" size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleShare}>
                        <Feather name="share" color="#212743" size={30}/>
                    </TouchableOpacity>
                </Header>
                <LinkArea>
                    <Title>Link encurtado</Title>
                    <LongURL numberOfLines={1}>{data.long_url}</LongURL>
                    <ShortLinkArea activeOpacity={1} onPress={copyLink}>
                        <ShortLinkURL numberOfLines={1}>
                            {data.link}
                        </ShortLinkURL>
                        <TouchableOpacity onPress={copyLink}>
                            <Feather name="copy" color="#fff" size={25}/>
                        </TouchableOpacity>
                    </ShortLinkArea>
                </LinkArea>
            </Container>
        </ModalContainer>
    )
}

export default ModalLink;
