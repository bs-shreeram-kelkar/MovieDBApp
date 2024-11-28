import React, { useCallback, useState , useEffect } from 'react';
import { View , ScrollView , FlatList ,SafeAreaView , StyleSheet} from 'react-native';
import { List, Text,Icon,Button, TouchableRipple} from 'react-native-paper';
import ImageDisplay from './ImageDisplay';
import { getAllMovies } from '../database/getAllMovies';
import { useFocusEffect } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native';
import { Navigation } from 'react-native-navigation';
import Loader from './Loader';

const SavedMovieList = (props) => {
    const getImageURL = (page) => {
        return "https://image.tmdb.org/t/p/w500" + page
      };
    
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
//   const navigation = useNavigation();
  // useEffect(() => {
  //   // Fetch all saved movies when the component mounts
  //   const fetchMovies = async () => {
  //     const allMovies = await getAllMovies();
  //     console.log("herere");
  //     console.log(allMovies);
  //     setMovies(allMovies);
  //   };

  //   fetchMovies();
  // }, []);
  
  useEffect(() => {
    const navigationListener = Navigation.events().registerComponentListener(
      {
        componentDidAppear: async () => {
          console.log('Screen is now focused!');
          const allMovies = await getAllMovies();
          setMovies(allMovies);
          setIsLoading(false)
        },
        componentDidDisappear: () => {
        },
      },
      props.componentId
    );

    return () => {
      if (navigationListener) {
        navigationListener.remove();
      }
    };
  }, [props.componentId]);


  return (
    <SafeAreaView>
    <View style={{padding: 16}}>
      <Text variant="titleSmall"> Saved Movies</Text>
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
                Navigation.push(props.componentId, {
                  component: {
                    name: 'com.myApp.MovieDetailsScreen',
                    passProps: {
                      props: props,
                      id: item.id.toString(), // Replace with the actual movie ID
                    },
                    options: {
                      topBar: {
                        title: {
                          text: 'Details'
                        },
                        rightButtons: [],
                        leftButtons: [
                          {
                            id: 'backButton', // Back button
                            icon: require('../assets/ChevronLeft.png'), // Replace with your back button icon
                            color: 'gray', // Back button icon color
                          },
                        ],

                      }
                    }
                  }
                });
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
            <View style={{flexDirection: 'row'}}>
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

export default SavedMovieList;
