// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View,ScrollView } from 'react-native';
import axios from 'axios';
import { List, Text } from 'react-native-paper';
import MovieListScreen from './MovieListScreen';
import ShowsListScreen from './ShowsListScreen';
import Loader from './Loader';

const HomeScreen = ({ navigation }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => setPokemonList(response.data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <ScrollView>
        <MovieListScreen />
        <ShowsListScreen />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
