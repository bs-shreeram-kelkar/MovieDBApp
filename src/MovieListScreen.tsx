// MovieListScreen.js
import React, { useEffect, useState } from 'react';
import { View , ScrollView , FlatList} from 'react-native';
import { getMovies } from './Api/getMovies';
import { List, Text,Icon,Button, TouchableRipple} from 'react-native-paper';
import ImageDisplay from './ImageDisplay';
// import { saveMovies } from '../database/saveMovies';

const MovieListScreen = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const fetchMovies = async (page) => {
    try {
      console.log("getting movies")
      const data = await getMovies(page);
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const getImageURL = (page) => {
    return "https://image.tmdb.org/t/p/w500" + page
  };

  return (
    <View >
      <Text variant="titleSmall"> Top Movies</Text>
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <TouchableRipple
            onPress={() => 
              {
                console.log('Pressed')
                // saveMovies(item)
              }}
            rippleColor="gray"
          >
          <View style={{ padding: 12 }}>
            <ImageDisplay 
                url={getImageURL(item.backdrop_path)} 
                width={214} 
                height={120} 
            />
            <Text variant="labelSmall" >{item.title}</Text>
            <View style={{ flex: 1, flexDirection: 'row'}}>
              <Icon source="star" size={12}/> 
              <Text  variant="labelSmall"> {item.vote_average} / 10</Text>
            </View>
          </View>
          </TouchableRipple>
        )}
      />
    </View>
  );
};

export default MovieListScreen;
