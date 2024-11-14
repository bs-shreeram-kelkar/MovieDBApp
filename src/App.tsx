// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { CombinedDarkTheme } from './theme';
import { MainNavigation } from './Navigation';

import { DatabaseProvider } from '@nozbe/watermelondb/DatabaseProvider';
import database from '../database';

function App() {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <DatabaseProvider database={database}>
      <NavigationContainer theme={CombinedDarkTheme}>
        <MainNavigation />
      </NavigationContainer>
      </DatabaseProvider>
    </PaperProvider>
  );
}

export default App;
