import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Platform, StatusBar } from 'react-native';
import theme from './theme';

const BaseWrapper = (Component) => (props) => {
    return (
            <PaperProvider theme={theme}>
                <StatusBar />
                <Component {...props} />
            </PaperProvider>
    );
};

export default BaseWrapper;
