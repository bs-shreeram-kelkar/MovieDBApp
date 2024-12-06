import { Navigation } from 'react-native-navigation';
import { MOVIE_DETAILS_SCREEN } from '../..';

export const navigateToMovieDetails = (componentId, props, movieId) => {
    Navigation.push(componentId, {
      component: {
        name: MOVIE_DETAILS_SCREEN,
        passProps: {
          props: props,
          id: movieId,
        },
        options: {
          topBar: {
            title: {
              text: 'Details'
            },
            rightButtons: [],
            leftButtons: [
              {
                id: 'backButton',
                icon: require('../../assets/ChevronLeft.png'),
                color: 'gray',
              },
            ],
          }
        }
      }
    });
  };
