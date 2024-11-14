// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { CombinedDarkTheme } from './theme';
import { MainNavigation } from './Navigation';

import { DatabaseProvider } from '@nozbe/watermelondb/DatabaseProvider';
import database from '../database';

import { createNavigationContainerRef } from '@react-navigation/native';

export const homenavigationRef = createNavigationContainerRef();
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={CombinedDarkTheme}>
        <DatabaseProvider database={database}>
        <NavigationContainer theme={CombinedDarkTheme} ref={homenavigationRef}>
          <MainNavigation />
        </NavigationContainer>
        </DatabaseProvider>
      </PaperProvider>
    </Provider>
  );
}

export default App;
