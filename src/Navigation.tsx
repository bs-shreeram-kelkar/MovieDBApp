// Navigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ImageDisplay from './ImageDisplay';
import Login from './login';
import SavedMovieList from './SavedMovieList';
import MovieDetailScreen from './MovieDetailScreen';

import { CombinedDarkTheme } from './theme';

import { View,List } from 'react-native';
import { Text } from 'react-native-paper'


import ProfileScreen from './ProfileScreen';
import UserDetailsTab from './UserDetailsTab';
import SearchScreen from './SearchScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



export function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Favourite') {
            iconName = 'information-circle-outline';
          } else if (route.name == "Profile") {
            iconName = "archive-outline"
          } else if (route.name == "User") {
            iconName = "attach-outline"
          } else if (route.name == "Search") {
            iconName = "search"
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2f95dc',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" options={{ headerLeft: () => null }} component={HomeTabStack} />
      <Tab.Screen name="Favourite" component={FavTab} />
      <Tab.Screen name="Search" component={SearchTabStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="User" component={UserDetailsTab} />


    </Tab.Navigator>
  );
}

// Home stack for tab navigation
function HomeTabStack() {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />

    </Stack.Navigator>
  );
}

function SearchTabStack() {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" options={{ headerLeft: () => null }} component={SearchScreen} />
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />

    </Stack.Navigator>
  );
}



function FavTab() {
    return (
      <SavedMovieList />
    );
}

export function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login"   screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
