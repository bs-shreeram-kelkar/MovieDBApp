import React, {useEffect , useState} from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView ,FlatList} from 'react-native';
import { Text, Card, Button, Icon , Chip , Snackbar} from 'react-native-paper';
import { getMovieDetails } from './Api/getMovieDetails';
import Loader from './Loader';
import { FasterImageView } from '@candlefinance/faster-image';
import { saveMovies } from '../database/saveMovies';
import RecommendationList from './RecommendationList';


const MovieDetailScreen = ({ route, navigation }) => {
  const [movieData, setMovieData] = useState(null);
  const { movieID } = route.params;
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
    fetchData(movieID);
  }, []);



  const getImageURL = (page) => {
    return "https://image.tmdb.org/t/p/w500" + page
  };


  const fetchData = async (movieID) => {
    try {
      console.log("getting shows")
      const data = await getMovieDetails(movieID);
      setMovieData(data);
      console.log(data)
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (movie) => {
    const isSaved = await saveMovies(movie);
    if (isSaved) {
      console.log('Movie saved successfully!');
      setVisible(true)
    } else {
      console.log('Failed to save the movie.');
      setVisible(true)
    }

    };
  const adsfasdf = (movie) => {
    console.log("adsfasdfkjxcnvjn")
    savemove123(movie)
  }
  const asdfkljf = {

  }

  const savemove123 = async (abc) => {
    const isSaved = await saveMovies(movie);
    if (isSaved) {
      console.log('Movie saved successfully!');
    } else {
      console.log('Failed to save the movie.');
    }
  }
  const [visible, setVisible] = React.useState(false);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <SafeAreaView>
      <ScrollView>
            {isLoading ? (
        <View style={styles.container}><Loader /></View> // Show a loading message when fetching movies
      ) : (
      <View style={styles.container}>
          <FasterImageView
            style={styles.image} // Use width to make it circular if needed
            onSuccess={(event) => {
              console.log('Image loaded:', event.nativeEvent);
            }}
            onError={(event) => {
              console.warn('Image load error:', event.nativeEvent.error);
            }}
            source={{
              transitionDuration: 0.3,
              cachePolicy: 'discWithCacheControl',
              showActivityIndicator: true,
              url: getImageURL(movieData.backdrop_path),
            }}
          />
            <Text variant="headlineMedium">
              {movieData.original_title}
            </Text >
            <Text variant="labelMedium">
              {movieData.overview}
            </Text>
            <Button icon="heart" mode="contained" onPress={() => {handleLogin(movieData)}} style={styles.button}>
            Add to WatchList
            </Button>
            <Button icon="bookmark" mode="elevated" onPress={() => {}} style={styles.button}>
            Add to BookMark
            </Button>
            <Text>Genres :</Text> 
            <View style={styles.rows}>
              {movieData.genres.map((item, index) => (
                <View key={item.id} style={styles.chipWrapper}>
                  <Chip icon="information" onPress={() => console.log('Pressed', item.name)}>
                    {item.name}
                  </Chip>
                </View>
            ))}
          </View>
          <RecommendationList movieID={movieID} />
          <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'Ok',
            onPress: () => {
              setVisible(false)
            }
          }}>
            Movie Added to watchList
      </Snackbar>
        </View>
      )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'left',
    gap: 12,
    padding: 12,
  },
  image: {
    flex: 1,
    width: '100%', // Takes the full width of the parent container
    aspectRatio: 16 / 9, // Aspect ratio of 16:9 (width / height)
    backgroundColor: '#ccc', // Fallback color while loading
  },
  row: {
    flex: 1, // Ensures the container takes up the full screen
    flexDirection: 'row', // Lays out children horizontally
    justifyContent: 'top', // Centers children horizontally within the container
    alignItems: 'top', // Centers children vertically within the container
    padding: 12,
  },
  rows: {
    flexDirection: 'row', // Layout items in a row
    flexWrap: 'wrap', // Allow items to wrap to the next line
    justifyContent: 'space-between', // Space chips evenly across rows
  },
  chipWrapper: {
    width: '48%', // Ensures two chips per row with spacing
    marginVertical: 5, // Adds vertical spacing between rows
  },
});
export default MovieDetailScreen;
