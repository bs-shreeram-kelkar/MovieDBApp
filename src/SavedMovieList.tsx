import React, { useState, useEffect } from 'react';
import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { getAllMovies } from '../database/getAllMovies';
import { Navigation } from 'react-native-navigation';
import LoaderComponent from './Components/Loader';
import MovieCardComponent from './Components/MovieCard';

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
}

interface SavedMovieListProps {
  componentId: string;
}

const SavedMovieList: React.FC<SavedMovieListProps> = ({ componentId }) => {
  const getImageURL = (path: string): string => {
    return "https://image.tmdb.org/t/p/w500" + path;
  };

  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const navigationListener = Navigation.events().registerComponentListener(
      {
        componentDidAppear: async () => {
          const allMovies = await getAllMovies();
          setMovies(allMovies as Movie[]);
          setIsLoading(false);
        },
        componentDidDisappear: () => {
          // Empty callback required by interface
        },
      },
      componentId
    );

    return () => {
      if (navigationListener) {
        navigationListener.remove();
      }
    };
  }, [componentId]);

  return (
    <SafeAreaView>
      <View style={{padding: 16}}>
        <Text variant="titleSmall"> Saved Movies</Text>
        {isLoading ? (
          <View style={styles.container}><LoaderComponent /></View>
        ) : (
          <FlatList
            horizontal
            data={movies}
            keyExtractor={(item: Movie) => item.id.toString()}
            renderItem={({ item }: { item: Movie }) => (
              <MovieCardComponent
                props={{componentId}}
                item={item}
                getImageURL={getImageURL}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
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

export default SavedMovieList;
