import { Navigation } from 'react-native-navigation';
import BaseWrapper from './BaseWrapper';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';

// Wrap screens with BaseWrapper
Navigation.registerComponent('com.myApp.HomeScreen', () => BaseWrapper(HomeScreen));
Navigation.registerComponent('com.myApp.ProfileScreen', () => BaseWrapper(ProfileScreen));
Navigation.registerComponent('com.myApp.LoginScreen', () => BaseWrapper(LoginScreen));

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'com.myApp.LoginScreen',
                        },
                    },
                ],
            },
        },
    });
});
