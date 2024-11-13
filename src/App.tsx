// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { CombinedDarkTheme } from './theme';
import { MainNavigation } from './Navigation';

function App() {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer theme={CombinedDarkTheme}>
        <MainNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
