import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/DrawerNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default App;
