// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { CombinedDarkTheme, CombinedDefaultTheme } from './theme';
import { MainNavigation } from './Navigation';
import { DatabaseProvider } from '@nozbe/watermelondb/DatabaseProvider';
import database from '../database';
import { createNavigationContainerRef } from '@react-navigation/native';

import { useSelector } from 'react-redux';

export const homenavigationRef = createNavigationContainerRef();
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  );

  function ThemedApp() {
    const theme = useSelector((state) => state.theme.theme);
    console.log(theme)
    const selectedTheme = theme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;
    return(
      <PaperProvider theme={selectedTheme}>
        <DatabaseProvider database={database}>
        <NavigationContainer ref={homenavigationRef} theme={selectedTheme}>
          <MainNavigation />
        </NavigationContainer>
        </DatabaseProvider>
      </PaperProvider>
    );

  }
}

export default App;
