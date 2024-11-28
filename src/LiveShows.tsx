// LiveShows.js
import React, { useEffect, useState } from 'react';
import { View,ScrollView,FlatList,StyleSheet } from 'react-native';
import axios from 'axios';
// import { List, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import Loader from './Loader';
import { NavigationProps } from 'react-native-navigation';
import { List, Text,Icon, TouchableRipple} from 'react-native-paper';
import { getLiveShows } from './Api/getLiveShows';
import ImageDisplay from './ImageDisplay';

const LiveShows = (props: NavigationProps) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true)
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    console.log("vbncm")
    fetchShows(page);
  }, []);

  const fetchShows = async (page) => {
    try {
      console.log("getting shows")

      const data = await getLiveShows(page);
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      console.log("hfturidjf")
      // setMovies(data.results)
      setIsFetchingMore(false);
      setIsLoading(false)
    } catch (error) {
      console.error(error);
      setIsFetchingMore(false);
    }
  };

  const getImageURL = (page) => {
    return "https://image.tmdb.org/t/p/w500" + page
  };

  const loadMoreShows = () => {
    if (!isFetchingMore) {
      setIsFetchingMore(true);
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        console.log(nextPage)
        fetchShows(nextPage);
        return nextPage;
      });
    }
  };



  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View >
      <Text variant="titleSmall"> Live Shows</Text>
      {isLoading ? (
        <View style={styles.container}><Loader /></View> // Show a loading message when fetching movies
      ) : (

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableRipple
          onPress={() => console.log('Pressed')}
          rippleColor="gray"
        >
          <View style={{ padding: 12,flexDirection: 'row'}}>
            <ImageDisplay
                url={getImageURL(item.backdrop_path)}
                width={107}
                height={60}
            />
            <View style={{ paddingLeft: 6, flexDirection: 'column',gap: 6}}>
            <Text variant="labelMedium" >Name: {item.name}.</Text>
            <Text variant="labelSmall">First air: {item.first_air_date}</Text>
            </View>
          </View>
          </TouchableRipple>
        )}
        onEndReached={loadMoreShows}
      />
      )}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    alignItems: 'center',
    height: 120
  }
});


export default LiveShows;
