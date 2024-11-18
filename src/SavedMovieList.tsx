import React, { useCallback, useState } from 'react';
import { View , ScrollView , FlatList ,SafeAreaView} from 'react-native';
import { List, Text,Icon,Button, TouchableRipple} from 'react-native-paper';
import ImageDisplay from './ImageDisplay';
import { getAllMovies } from '../database/getAllMovies';
import { useFocusEffect } from '@react-navigation/native';

const SavedMovieList = () => {
    const getImageURL = (page) => {
        return "https://image.tmdb.org/t/p/w500" + page
      };
    
  const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   // Fetch all saved movies when the component mounts
  //   const fetchMovies = async () => {
  //     const allMovies = await getAllMovies();
  //     console.log("herere");
  //     console.log(allMovies);
  //     setMovies(allMovies);
  //   };

  //   fetchMovies();
  // }, []);
  
  useFocusEffect(
    useCallback(() => {
      console.log('Screen is now focused!');
      const fetchMovies = async () => {
        const allMovies = await getAllMovies();
        console.log("herere");
        console.log(allMovies);
        setMovies(allMovies);
      };
  
      fetchMovies();
  
      return () => {
        console.log('Screen is unfocused!');
        // Cleanup if necessary
      };
    }, [])
  );

  return (
    <SafeAreaView>
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
            <View style={{flexDirection: 'row'}}>
              <Icon source="star" size={12}/> 
              <Text  variant="labelSmall"> {item.vote_average} / 10</Text> */}
            </View>
          </View>
          </TouchableRipple>
        )}
      />
    </View>
    </SafeAreaView>
  );
};

export default SavedMovieList;
