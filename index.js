import { Navigation } from 'react-native-navigation';
import BaseWrapper from './BaseWrapper';
import Login from './src/Login';
import ProfileScreen from './src/ProfileScreen';
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

export const LOGIN_SCREEN = 'com.myApp.LoginScreen';
export const PROFILE_SCREEN = 'com.myApp.ProfileScreen';
export const TAB_SCREEN = 'com.myApp.TabScreen';
export const HOME_SCREEN = 'com.myApp.HomeScreen';
export const SAVED_MOVIE_LIST = 'com.myApp.SavedMovieList';
export const USER_DETAILS = 'com.myApp.UserDetails';
export const MOVIE_DETAILS_SCREEN = 'com.myApp.MovieDetailsScreen';
export const SEARCH_SCREEN = 'com.myApp.SearchScreen';
export const MOVIE_LIST_SCREEN = 'com.myApp.MovieListScreen';
export const SIDE_MENU = 'com.myApp.SideMenu';
export const LIVE_SHOWS = 'com.myApp.LiveShows';

export const Screens: Map<string, React.ComponentType> = new Map();

Screens.set(LOGIN_SCREEN, Login);
Screens.set(PROFILE_SCREEN, ProfileScreen);
Screens.set(TAB_SCREEN, TabScreen);
Screens.set(HOME_SCREEN, HomeScreen);
Screens.set(SAVED_MOVIE_LIST, SavedMovieList);
Screens.set(USER_DETAILS, UserDetailsTab);
Screens.set(MOVIE_DETAILS_SCREEN, MovieDetailScreen);
Screens.set(SEARCH_SCREEN, SearchScreen);
Screens.set(MOVIE_LIST_SCREEN, MovieListScreen);
Screens.set(SIDE_MENU, SideMenu);
Screens.set(LIVE_SHOWS, LiveShows);

Screens.forEach((ScreenComponent, key): void => {
    Navigation.registerComponent(key, () => BaseWrapper(ScreenComponent));
});

export const mmkvStorage = new MMKV();
import { navigateToLogin } from './src/navigateToLogin';

Navigation.events().registerAppLaunchedListener((): void => {
    const isLoggedIn: boolean = mmkvStorage.getBoolean('isLoggedIn');
    if (isLoggedIn) {
        Navigation.setRoot({
            root: {
                stack: {
                    children: [
                        {
                            component: {
                                name: TAB_SCREEN,
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
        navigateToLogin();
    }
});
