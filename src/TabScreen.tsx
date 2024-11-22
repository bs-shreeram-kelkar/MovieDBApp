import React from 'react';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons'; // Or any other vector icon package
import { mmkvStorage } from '..';

const TabScreen = () => {
  // Load icons asynchronously
  // const homeIcon = await Icon.getImageSource('home-outline', 30, '#000');
  // const profileIcon = await Icon.getImageSource('person-outline', 30, '#000');
  // const userDetailIcon = await Icon.getImageSource('attach-outline', 30, '#000');
  // const savedMovieIcon = await Icon.getImageSource('information-circle-outline', 30, '#000');
  // const searchMovieIcon = await Icon.getImageSource('search-outline', 30, '#000');
  const username = mmkvStorage.getString("username");

  // Set the root to bottom tab navigation
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'com.myApp.HomeScreen',
                    options: {
                      topBar: {
                          visible: false, // Hide the top bar
                          drawBehind: true, // Draw the screen behind the top bar
                          animate: false, // Disable animation for hiding
                      },
                  },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Home',
                  icon: require('../assets/home.png'),
                  iconColor: 'gray',
                  selectedIconColor: 'blue',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'com.myApp.SavedMovieList',
                    options: {
                      topBar: {
                          visible: false, // Hide the top bar
                          drawBehind: true, // Draw the screen behind the top bar
                          animate: false, // Disable animation for hiding
                      },
                  },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Saved Movies',
                  icon: require('../assets/bookmark.png'),
                  iconColor: 'gray',
                  selectedIconColor: 'blue',

                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'com.myApp.SearchScreen',
                    options: {
                      topBar: {
                          visible: false, // Hide the top bar
                          drawBehind: true, // Draw the screen behind the top bar
                          animate: false, // Disable animation for hiding
                      },
                  },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Search',
                  icon: require('../assets/search.png'),
                  iconColor: 'gray',
                  selectedIconColor: 'blue',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'com.myApp.ProfileScreen',
                    options: {
                      topBar: {
                          visible: false, // Hide the top bar
                          drawBehind: true, // Draw the screen behind the top bar
                          animate: false, // Disable animation for hiding
                      },
                  },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: username,
                  icon: require('../assets/Person.png'),
                  iconColor: 'gray',
                  selectedIconColor: 'blue',
                },
              },
            },
          },

          {
            stack: {
              children: [
                {
                  component: {
                    name: 'com.myApp.UserDetails',
                    options: {
                      topBar: {
                          visible: false, // Hide the top bar
                          drawBehind: true, // Draw the screen behind the top bar
                          animate: false, // Disable animation for hiding
                      },
                  },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'UserDetails',
                  icon: require('../assets/settings.png'),
                  iconColor: 'gray',
                  selectedIconColor: 'blue',
                },
              },
            },
          },
        ],
      },
    },
  });
};

export default TabScreen;
