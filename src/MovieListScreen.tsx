// MovieListScreen.js
import React, { useEffect, useState } from 'react';
import { View , ScrollView , FlatList ,StyleSheet} from 'react-native';
import { getMovies } from './Api/getMovies';
import { List, Text, Icon, Button, TouchableRipple} from 'react-native-paper';
import ImageDisplay from './ImageDisplay';
import { saveMovies } from '../database/saveMovies';
// import { homenavigationRef } from './App';
import Loader from './Loader';
// import { useNavigation } from '@react-navigation/native';
import { Navigation, NavigationProps } from 'react-native-navigation';

const MovieListScreen = (props: NavigationProps) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const fetchMovies = async (page) => {
    try {
      console.log("getting movies")
      const data = await getMovies(page);
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
      <Text variant="titleSmall"> Top Movies</Text>
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
                console.log(props.componentId)
                Navigation.push(props.componentId, {
                  component: {
                    name: 'com.myApp.MovieDetailsScreen',
                    passProps: {
                      props: props,
                      id: item.id.toString(), // Replace with the actual movie ID
                    },
                    options: {
                      topBar: {
                        title: {
                          text: 'Details'
                        },
                        rightButtons: [],
                        leftButtons: [
                          {
                            id: 'backButton', // Back button
                            icon: require('../assets/ChevronLeft.png'), // Replace with your back button icon
                            color: 'gray', // Back button icon color
                          },
                        ],
                      }
                    }
                  }
                });
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


export default MovieListScreen;
