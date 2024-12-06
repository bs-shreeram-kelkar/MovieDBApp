import React, {useEffect , useState} from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import { Text, Button, Chip , Snackbar} from 'react-native-paper';
import { getMovieDetails } from './Api/getMovieDetails';
import LoaderComponent from './Components/Loader';
import { FasterImageView } from '@candlefinance/faster-image';
import RecommendationList from './RecommendationList';
import MovieButtonComponent from './Components/SaveButton';
import { toggleSideMenu } from './SideMenu';
import { NavigationProps } from 'react-native-navigation';

interface MovieData {
  backdrop_path: string;
  original_title: string;
  overview: string;
  genres: Array<{
    id: number;
    name: string;
  }>;
}

interface MovieDetailScreenProps {
  id: string;
  props: NavigationProps;
}

const MovieDetailScreen: React.FC<MovieDetailScreenProps> = ({ props, id }) => {
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const movieID = id;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    fetchData(movieID);
    toggleSideMenu();
  }, [movieID]);

  const getImageURL = (path: string): string => {
    return 'https://image.tmdb.org/t/p/w500' + path;
  };

  const fetchData = async (movieID: string): Promise<void> => {
    try {
      const data = await getMovieDetails(parseInt(movieID, 10));
      setMovieData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const onDismissSnackBar = (): void => setVisible(false);

  return (
    <SafeAreaView>
      <ScrollView>
        {isLoading ? (
          <View style={styles.container}><LoaderComponent /></View>
        ) : (
          movieData && (
            <View style={styles.container}>
              <View style={styles.holder}>
                <FasterImageView
                  style={styles.image as any}
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
              </View>
              <Text variant="headlineMedium">
                {movieData.original_title}
              </Text>
              <Text variant="labelMedium">
                {movieData.overview}
              </Text>
              <MovieButtonComponent movie={movieData} showSnackbar={() => setVisible(true)} />
              <Button icon="bookmark" mode="elevated" onPress={() => {}} style={styles.button as any}>
                Add to BookMark
              </Button>
              <Text>Genres :</Text>
              <View style={styles.rows}>
                {movieData.genres.map((item) => (
                  <View key={item.id} style={styles.chipWrapper}>
                    <Chip icon="information" onPress={() => console.log('Pressed', item.name)}>
                      {item.name}
                    </Chip>
                  </View>
                ))}
              </View>
              <RecommendationList props={props} id={movieID} />
            </View>
          )
        )}
      </ScrollView>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Ok',
          onPress: () => {
            setVisible(false);
          },
        }}>
        Movie Added to watchList
      </Snackbar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    padding: 12,
  },
  image: {
    flex: 1,
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#ccc',
  },
  holder: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#ccc',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 12,
  },
  rows: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  chipWrapper: {
    width: '48%',
    marginVertical: 5,
  },
});

export default MovieDetailScreen;
