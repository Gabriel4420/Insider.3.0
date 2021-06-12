import React, {useState} from 'react';

import { TouchableWithoutFeedback , 
         Keyboard, 
         KeyboardAvoidingView, 
         Platform, 
         Modal, 
         ActivityIndicator
} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

import StatusBarPage from '../../components/StatusBarPage';

import ModalLink from '../../components/ModalLink';

import {ContainerLogo, 
    Logo, 
    ContainerContent, 
    Title, 
    SubTitle, 
    ContainerInput, 
    BoxIcon, 
    Input,
    ButtonLink,
    TextButton
} from './styles';

import api from '../../services/Api';
import {saveLink} from '../../utils/StoreLinks';
import Menu from '../../components/Menu';

import {Feather} from '@expo/vector-icons';



const Home = () => {
    /* SetStates */
    const [input,setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [data, setData] = useState({});

    /* Functions  */

     const handleShortLink = async () => {
       
        setLoading(true);

        try {
            
            const response = await api.post('shorten',{
                long_url: input
            });

            setData(response.data);
            setModalVisibility(true);

            //DEU TUDO CERTO, PRECISO SALVAR O LINK EM UMA LISTA NESSE STORAGE
            saveLink('sujeitoLinks',response.data);

            Keyboard.dismiss();
            setLoading(false);

            setInput('');

        } catch (error) {
            alert('Ops, seans like you'+"'"+'re url are broken');
            Keyboard.dismiss();
            setInput('');
            setLoading(false);
        }
    }

    const handleCloseModal = () => {
        setModalVisibility(false);
    }

  

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <LinearGradient
            colors={['#1ddbb9','#132742']}
            style={{flex:1, justifyContent: 'center'}}
        >
            <StatusBarPage 
             barStyle="light-content"
             backgroundColor="#1ddbb9"/>

             <Menu/>
             <KeyboardAvoidingView
                behavior={Platform.OS ==='android'? 'padding':'position' }
                enabled
             >

             <ContainerLogo>
                 <Logo source={require('../../assets/Logo.png')}/>
             </ContainerLogo>

             <ContainerContent>
                 <Title>Sujeito Link</Title>
                 <SubTitle> Cole seu link para encurtar</SubTitle>

                <ContainerInput>
                    <BoxIcon>
                        <Feather name="link" size={22} color="#fff"/>
                        
                    </BoxIcon>
                    <Input
                            placeholder="Cole seu link aqui"
                            placeholderTextColor={'#fff'} 
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="url"
                            value={input}
                            onChangeText={(text) => setInput(text)}
                        />

                </ContainerInput>

                   <ButtonLink onPress={handleShortLink}>
                     {
                         loading ? (
                            <ActivityIndicator color="#132790" size={24}/>
                         ):(
                            <TextButton>Gerar Link</TextButton>
                         )
                     }
                        
                    </ButtonLink>
             </ContainerContent>

             </KeyboardAvoidingView>

            <Modal visible={modalVisibility} transparent animationType="slide">
                <ModalLink onClose={handleCloseModal} data={data}/>
            </Modal>
           
        </LinearGradient>
        </TouchableWithoutFeedback>

        
    )
}

export default Home;