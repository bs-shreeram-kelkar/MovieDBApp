// MovieListScreen.js
import React, { useEffect, useState } from 'react';
import { View , ScrollView , FlatList ,StyleSheet} from 'react-native';
import { List, Text,Icon,Button, TouchableRipple} from 'react-native-paper';
import ImageDisplay from './ImageDisplay';
import { saveMovies } from '../database/saveMovies';
import { homenavigationRef } from './App';
import Loader from './Loader';

import { getRecommandation } from './Api/getRecommandation';

const RecommendationList = ({ movieID , navigation}) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    fetchMovies(movieID);
  }, [page]);

  const fetchMovies = async (page) => {
    try {
      console.log("getting movies")
      const data = await getRecommandation(page);
      setMovies(data.results);
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  const getImageURL = (page) => {
    return "https://image.tmdb.org/t/p/w500" + page
  };

  return (
    <View >
      <Text variant="titleSmall"> Similar movie</Text>
      {isLoading ? (
        <View style={styles.container}><Loader /></View> // Show a loading message when fetching movies
      ) : (
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <TouchableRipple
            onPress={() => 
              {
                console.log('Pressed')
                if (homenavigationRef.current == null) {
                  console.log("is null")
                }
                homenavigationRef.current?.navigate('MovieDetailScreen', { movieID: item.id })
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
    height: 120
  }
});


export default RecommendationList;
