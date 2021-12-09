import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AppBottomBar} from './src/navigation'



export default function App() {

  
  return (
    <NavigationContainer>
      <AppBottomBar/>
    </NavigationContainer>
  );
}

