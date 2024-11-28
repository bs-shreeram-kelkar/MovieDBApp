// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View,ScrollView } from 'react-native';
import axios from 'axios';
// import { List, Text } from 'react-native-paper';
import MovieListScreen from './MovieListScreen';
import ShowsListScreen from './ShowsListScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

import Loader from './Loader';
import { NavigationProps } from 'react-native-navigation';
import SnapCarouselExample from './SnapCarouselExample';
import { Text } from 'react-native-paper';



const HomeScreen = (props: NavigationProps) => {
  useEffect(() => {
    console.log(props)
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <ScrollView>
        <MovieListScreen {...props}/>
        <ShowsListScreen />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
