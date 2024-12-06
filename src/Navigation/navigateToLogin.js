import { Navigation } from 'react-native-navigation';
import { LOGIN_SCREEN } from '../..';

export const navigateToLogin = () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: LOGIN_SCREEN,
                options: {
                  topBar: {
                    visible: false, // Hide the top bar
                    drawBehind: false, // Draw the screen behind the top bar
                    animate: false, // Disable animation for hiding
                  },
                },  
              },
            },
          ],
        },
      },
    });
  };
