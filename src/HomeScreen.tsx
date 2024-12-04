// HomeScreen.js
import React from 'react';
import { View,ScrollView ,StyleSheet } from 'react-native';
import MovieListScreen from './MovieListScreen';
import ShowsListScreen from './ShowsListScreen';
import { NavigationProps } from 'react-native-navigation';



const HomeScreen = (props: NavigationProps) => {
  return (
    <View style={styles.home}>
      <ScrollView>
        <MovieListScreen {...props}/>
        <ShowsListScreen />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    padding: 16,
  },
});


export default HomeScreen;
