import { Navigation } from 'react-native-navigation';
import BaseWrapper from './BaseWrapper';
import Login from './src/Login';
import ProfileScreen from './src/ProfileScreen';
// import LoginScreen from './LoginScreen';
import TabScreen from './src/TabScreen';
import HomeScreen from './src/HomeScreen';

import SavedMovieList from './src/SavedMovieList';
import UserDetailsTab from './src/UserDetailsTab';

import MovieDetailScreen from './src/MovieDetailScreen';

import SearchScreen from './src/SearchScreen';
import MovieListScreen from './src/MovieListScreen';
import { MMKV } from 'react-native-mmkv';
import SideMenu from './src/SideMenu';
import LiveShows from './src/LiveShows';

// Wrap screens with BaseWrapper
Navigation.registerComponent('com.myApp.LoginScreen', () => BaseWrapper(Login));
Navigation.registerComponent('com.myApp.ProfileScreen', () => BaseWrapper(ProfileScreen));
// Navigation.registerComponent('com.myApp.LoginScreen', () => BaseWrapper(LoginScreen));
Navigation.registerComponent('com.myApp.TabScreen', () => BaseWrapper(TabScreen));
Navigation.registerComponent('com.myApp.HomeScreen', () => BaseWrapper(HomeScreen));
Navigation.registerComponent('com.myApp.SavedMovieList', () => BaseWrapper(SavedMovieList));
Navigation.registerComponent('com.myApp.UserDetails', () => BaseWrapper(UserDetailsTab));

Navigation.registerComponent('com.myApp.MovieDetailsScreen', () => BaseWrapper(MovieDetailScreen));

Navigation.registerComponent('com.myApp.SearchScreen', () => BaseWrapper(SearchScreen));

Navigation.registerComponent('com.myApp.MovieListScreen', () => BaseWrapper(MovieListScreen));

Navigation.registerComponent('com.myApp.SideMenu', () => BaseWrapper(SideMenu));

Navigation.registerComponent('com.myApp.LiveShows', () => BaseWrapper(LiveShows));





  export const mmkvStorage = new MMKV();




Navigation.events().registerAppLaunchedListener(() => {
    // const isLoggedIn = false;
    const isLoggedIn = mmkvStorage.getBoolean('isLoggedIn');
    if (isLoggedIn) {
        Navigation.setRoot({
            root: {
                stack: {
                    children: [
                        {
                            component: {
                                name: 'com.myApp.TabScreen',
                                options: {
                                    topBar: {
                                        visible: false,
                                        drawBehind: true,
                                        animate: false,
                                    },
                                },
                            },
                        },
                    ],
                },
            },
        });
    } else {
        Navigation.setRoot({
            root: {
                stack: {
                    children: [
                        {
                            component: {
                                name: 'com.myApp.LoginScreen',
                                options: {
                                    topBar: {
                                        visible: true, // Hide the top bar
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
    }
});
