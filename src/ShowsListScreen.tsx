import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { getShows } from './Api/getShows';
import { Text, Icon, TouchableRipple } from 'react-native-paper';
import ImageDisplay from './ImageDisplay';
import LoaderComponent from './Components/Loader';

interface Show {
  id: number;
  name: string;
  backdrop_path: string;
  vote_average: number;
}

const ShowsListScreen: React.FC = () => {
  const [movies, setMovies] = useState<Show[]>([]);
  const [page] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const fetchMovies = async (pageNum: number): Promise<void> => {
    try {
      console.log("getting shows");
      const data = await getShows(pageNum);
      setMovies(data.results);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getImageURL = (path: string): string => {
    return "https://image.tmdb.org/t/p/w500" + path;
  };

  return (
    <View>
      <Text variant="titleSmall"> Top Shows</Text>
      {isLoading ? (
        <View style={styles.container}><LoaderComponent /></View>
      ) : (
        <FlatList
          horizontal
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableRipple
              onPress={() => console.log('Pressed')}
              rippleColor="gray"
            >
              <View style={{ padding: 12 }}>
                <ImageDisplay 
                  url={getImageURL(item.backdrop_path)}
                  width={214}
                  height={120}
                />
                <Text variant="labelSmall">{item.name}</Text>
                <View style={{ flex: 1, flexDirection: 'row'}}>
                  <Icon source="star" size={12} />
                  <Text variant="labelSmall"> {item.vote_average} / 10</Text>
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

export default ShowsListScreen;
