import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getSearchResults } from './Api/getSearchResults';
import { Text, Icon, TouchableRipple, Searchbar } from 'react-native-paper';
import Loader from './Loader';
import ImageDisplay from './ImageDisplay';
import { Navigation, NavigationProps } from 'react-native-navigation';
import MovieCard from './MovieCard';

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
}

interface SearchScreenProps {
  componentId: string;
  props: NavigationProps;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ componentId, props }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500); // Delay of 500ms for debounce

    return () => {
      clearTimeout(handler); // Clear timeout if query changes before 500ms
    };
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery.trim() !== '') {
      setIsLoading(true);
      fetchSearchResults(debouncedQuery);
    }
  }, [debouncedQuery]);

  const fetchSearchResults = async (query: string): Promise<void> => {
    try {
      console.log(`Fetching results for: ${query}`);
      const data = await getSearchResults(query);
      console.log('Search Results:', data);
      setMovies(data.results);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const getImageURL = (path: string): string => {
    return "https://image.tmdb.org/t/p/w500" + path;
  };

  return (
    <SafeAreaView>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <View style={{padding: 16}}>
        <Text variant="titleSmall"> Result: </Text>
        {isLoading ? (
          <View style={styles.container}><Loader /></View>
        ) : (
          <FlatList
            horizontal
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <MovieCard
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

export default SearchScreen;
