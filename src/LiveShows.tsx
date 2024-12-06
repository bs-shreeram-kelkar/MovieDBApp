// LiveShows.js
import React, { useEffect, useState } from 'react';
import { View,FlatList,StyleSheet } from 'react-native';
import LoaderComponent from './Components/Loader';
import { Text,TouchableRipple} from 'react-native-paper';
import { getLiveShows } from './Api/getLiveShows';
import ImageDisplay from './ImageDisplay';

const LiveShows = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    fetchShows(page);
  }, []);

  const fetchShows = async (page: number) => {
    try {
      const data = await getLiveShows(page);
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setIsFetchingMore(false);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsFetchingMore(false);
    }
  };

  const getImageURL = (page) => {
    return 'https://image.tmdb.org/t/p/w500' + page;
  };

  const loadMoreShows = () => {
    if (!isFetchingMore) {
      setIsFetchingMore(true);
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
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
        <View style={styles.container}><LoaderComponent /></View> // Show a loading message when fetching movies
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
    height: 120,
  },
});


export default LiveShows;
