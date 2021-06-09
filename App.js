import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

const App = () => {
  return (
    <NavigationContainer style={{marginTop:40}}>
      <Routes/>
    </NavigationContainer>
  )
}


export default App;