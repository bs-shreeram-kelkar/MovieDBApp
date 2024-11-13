// Navigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import Login from './Login';
import ImageDisplay from './ImageDisplay';

import { CombinedDarkTheme } from './theme';

import { View,List } from 'react-native';
import { Text } from 'react-native-paper'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



export function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') {
            iconName = 'home-outline';
          } else if (route.name === 'FavTab') {
            iconName = 'information-circle-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2f95dc',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeTabStack} />
      <Tab.Screen name="FavTab" component={FavTab} />
    </Tab.Navigator>
  );
}

// Home stack for tab navigation
function HomeTabStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function FavTab() {
    return (
        <View>
        <ImageDisplay 
            url="https://image.tmdb.org/t/p/w500//3V4kLQg0kSqPLctI5ziYWabAZYF.jpg" 
            width={200} 
            height={200} 
        />
        </View>
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
