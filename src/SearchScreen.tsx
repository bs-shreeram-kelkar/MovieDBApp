import React, { useEffect, useState } from 'react';
import { View , ScrollView , FlatList ,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getSearchResults } from './Api/getSearchResults';
import { List, Text,Icon,Button, TouchableRipple, Searchbar} from 'react-native-paper';
import Loader from './Loader';
import ImageDisplay from './ImageDisplay';
import { homenavigationRef } from './App';


const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)


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
      setIsLoading(true)
      fetchSearchResults(debouncedQuery);
    }
  }, [debouncedQuery]);

  const fetchSearchResults = async (query: string) => {
    try {
      console.log(`Fetching results for: ${query}`);
      const data = await getSearchResults(query);
      console.log('Search Results:', data);
      setMovies(data.results);
      setIsLoading(false)
      // Handle the search results as needed
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const getImageURL = (page) => {
    return "https://image.tmdb.org/t/p/w500" + page
  };



  return (
    <SafeAreaView>
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
    <View >
      <Text variant="titleSmall"> Result: </Text>
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
