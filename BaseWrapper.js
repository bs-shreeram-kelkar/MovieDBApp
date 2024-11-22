import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Platform, StatusBar } from 'react-native';
import theme from './theme';
import database from './database';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { CombinedDefaultTheme,CombinedDarkTheme } from './theme';
import { DatabaseProvider } from '@nozbe/watermelondb/DatabaseProvider';



const BaseWrapper = (Component) => (props) => {
    // const theme = useSelector((state) => state.theme.theme);
    // const selectedTheme = theme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;
    return (
        <Provider store={store}>
            <ThemedApp />
        </Provider>
    );

    function ThemedApp() {
        const theme = useSelector((state) => state.theme.theme);
        const selectedTheme = theme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;
        return(
          <PaperProvider theme={selectedTheme}>
            <DatabaseProvider database={database}>
            <StatusBar />
                <Component {...props} />
            </DatabaseProvider>
          </PaperProvider>
        );
      }
    };

export default BaseWrapper;
