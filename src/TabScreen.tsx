import { Navigation } from 'react-native-navigation';
import { SIDE_MENU,HOME_SCREEN,SAVED_MOVIE_LIST,SEARCH_SCREEN,LIVE_SHOWS } from '..';

interface NavigationButtonPressedEvent {
  buttonId: string;
  componentId?: string;
}

const TabScreen = (): void => {
  // Set the root to bottom tab navigation
  Navigation.events().registerNavigationButtonPressedListener(({ buttonId }: NavigationButtonPressedEvent) => {
    if (buttonId === 'menuButton') {
      Navigation.mergeOptions('centerStackView', {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    } else if (buttonId === 'searchButton') {
      // never here
    }
  });

  Navigation.events().registerNavigationButtonPressedListener(({ buttonId, componentId }: NavigationButtonPressedEvent) => {
    if (buttonId === 'backButton' && componentId) {
      Navigation.pop(componentId);
    }
  });

  Navigation.setRoot({
    root: {
      sideMenu: {
          left: {
            component: {
              name: SIDE_MENU,
            },
          },
        center: {
          bottomTabs: {
            options: {
              topBar: {
                visible: true,
                drawBehind: false,
                animate: true,
                title: {
                  text: 'My App',
                  color: 'black',
                },
                leftButtons: [
                  {
                    id: 'menuButton',
                    icon: require('../assets/menu.png'),
                    color: 'gray',
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
                        name: HOME_SCREEN,
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
                        name: SAVED_MOVIE_LIST,
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
                        name: SEARCH_SCREEN,
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
                        name: LIVE_SHOWS,
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
