import React from 'react';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons'; // Or any other vector icon package
import { mmkvStorage } from '..';

const TabScreen = (props) => {
  const username = mmkvStorage.getString("username");

  // Set the root to bottom tab navigation
  Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
    if (buttonId === 'menuButton') {
      Navigation.mergeOptions('ceter', {
        sideMenu: {
          left: {
            visible: true, // Open the side menu
          },
        },
      });
    } else if (buttonId == 'searchButton') {
      console.log("search clicked")
    }
  });

  Navigation.events().registerNavigationButtonPressedListener(({ buttonId ,componentId}) => {
    if (buttonId === 'backButton') {
      Navigation.pop(componentId);
    }
  });

  Navigation.setRoot({
    root: {
      id: 'centerStackView',
      sideMenu: {
          left: {
            component: {
              name: 'com.myApp.SideMenu', // Register the SideMenu component
            },
          },
        center: {
          id: 'centerStack',
          bottomTabs: {
            options: {
              topBar: {
                visible: true,
                drawBehind: false,
                animate: true,
                title: {
                  text: 'My App', // Shared title across all tabs
                  color: 'black',
                },
                leftButtons: [
                  {
                    id: 'menuButton',
                    icon: require('../assets/menu.png'), // Hamburger menu icon
                    color: 'gray', // Icon color
                  },
                ],
                rightButtons: [],
              },
            },
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'com.myApp.HomeScreen',
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
              // {
              //   stack: {
              //     children: [
              //       {
              //         component: {
              //           name: 'com.myApp.ProfileScreen',
              //         },
              //       },
              //     ],
              //     options: {
              //       bottomTab: {
              //         text: username || 'Profile',
              //         icon: require('../assets/Person.png'),
              //         iconColor: 'gray',
              //         selectedIconColor: 'blue',
              //       },
              //     },
              //   },
              // },
              // {
              //   stack: {
              //     children: [
              //       {
              //         component: {
              //           name: 'com.myApp.UserDetails',
              //         },
              //       },
              //     ],
              //     options: {
              //       bottomTab: {
              //         text: 'UserDetails',
              //         icon: require('../assets/settings.png'),
              //         iconColor: 'gray',
              //         selectedIconColor: 'blue',
              //       },
              //     },
              //   },
              // },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'com.myApp.LiveShows',
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      text: 'Live Shows',
                      icon: require('../assets/live_tv.png'),
                      iconColor: 'gray',
                      selectedIconColor: 'blue',
                    },
                  },
                },
              },
            ],
          },
        },
      },
    },
  });
};

export default TabScreen;
