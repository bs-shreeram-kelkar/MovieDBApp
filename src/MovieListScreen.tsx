import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { getMovies } from './Api/getMovies';
import { Text, Icon, TouchableRipple } from 'react-native-paper';
import ImageDisplay from './ImageDisplay';
import Loader from './Loader';
import { Navigation, NavigationProps } from 'react-native-navigation';
import MovieCard from './MovieCard';

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
}

const MovieListScreen: React.FC<NavigationProps> = (props: NavigationProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const fetchMovies = async (pageNum: number): Promise<void> => {
    try {
      console.log("getting movies");
      const data = await getMovies(pageNum);
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
      <Text variant="titleSmall"> Top Movies</Text>
      {isLoading ? (
        <View style={styles.container}><Loader /></View> // Show a loading message when fetching movies
      ) : (
        <FlatList
          horizontal
          data={movies}
          keyExtractor={(item: Movie) => item.id.toString()}
          renderItem={({ item }: { item: Movie }) => (
            <MovieCard
              props={props}
              item={item}
              getImageURL={getImageURL}
            />
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
