import React, { useEffect, useState } from 'react';
import { View , ScrollView , FlatList} from 'react-native';
import { List, Text,Icon,Button, TouchableRipple} from 'react-native-paper';
import ImageDisplay from './ImageDisplay';
import { getAllMovies } from '../database/getAllMovies';

const SavedMovieList = () => {
    const getImageURL = (page) => {
        return "https://image.tmdb.org/t/p/w500" + page
      };
    
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // Fetch all saved movies when the component mounts
    const fetchMovies = async () => {
      const allMovies = await getAllMovies();
      console.log("herere");
      console.log(allMovies);
      setMovies(allMovies);
    };

    fetchMovies();
  }, []);

  return (
    <View>
      <Text variant="titleSmall"> Saved Movies</Text>
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

export default SavedMovieList;