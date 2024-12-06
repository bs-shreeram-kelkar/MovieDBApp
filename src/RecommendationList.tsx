import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import LoaderComponent from './Components/Loader';
import { getRecommandation } from './Api/getRecommandation';
import { NavigationProps } from 'react-native-navigation';
import MovieCardComponent from './Components/MovieCard';

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
}

interface RecommendationListProps {
  props: NavigationProps;
  id: string;
}

const RecommendationList: React.FC<RecommendationListProps> = ({ props, id }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const movieID = id;

  useEffect(() => {
    fetchMovies(movieID);
  }, [movieID]);

  const fetchMovies = async (movieId: string): Promise<void> => {
    try {
      const data = await getRecommandation(parseInt(movieId, 10));
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
      <Text variant="titleSmall">Similar movie</Text>
      {isLoading ? (
        <View style={styles.container}><LoaderComponent /></View>
      ) : (
        <FlatList
          horizontal
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieCardComponent
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

export default RecommendationList;