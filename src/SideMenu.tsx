// SideMenu.js
import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Text, Icon, TouchableRipple} from 'react-native-paper';
import { Navigation } from 'react-native-navigation';
import { NavigationProps } from 'react-native-navigation';
import { PROFILE_SCREEN,USER_DETAILS } from '..';


const SideMenu = (props: NavigationProps) => {

  const handleMenuPress = (screenName: String) => {
  // Close the side menu
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              name: 'com.myApp.SideMenu', // Register the SideMenu component
            },
          },
        center: {
          stack: {
              children: [
                  {
                      component: {
                          name: screenName,
                          options: {
                              topBar: {
                                  visible: true, // Hide the top bar
                                  drawBehind: false, // Draw the screen behind the top bar
                                  animate: false, // Disable animation for hiding
                                  leftButtons: [
                                    {
                                      id: 'menuButton',
                                      icon: require('../assets/menu.png'), // Hamburger menu icon
                                      color: 'gray', // Icon color
                                    },
                                  ],
                              },
                          },
                      },
                  },
              ],
          },
        },
      }
      },
  });
  };
    return (
      // <SafeAreaView>
        <View style={styles.container}>
          <TouchableRipple
            onPress={( ) => {
              handleMenuPress('com.myApp.TabScreen');
            }}
          >
            <View style={styles.row}>
              <Icon source="home" size={20}/>
              <Text style={styles.menuItem}>
              Home
              </Text>
            </View>
          </TouchableRipple>
          <TouchableRipple
            onPress={( ) => {
              handleMenuPress(PROFILE_SCREEN);
            }}
          >
          <View style={styles.row}>
          <Icon source="face-man-profile" size={20}/>
            <Text style={styles.menuItem}>User Profile</Text>
          </View>
          </TouchableRipple>
          <TouchableRipple
            onPress={( ) => {
              handleMenuPress(USER_DETAILS);
            }}
          >
            <View style={styles.row}>
            <Icon source="account-settings-outline" size={20}/>
              <Text style={styles.menuItem}>Settings</Text>
            </View>
          </TouchableRipple>
        </View>
      // </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      gap: 20,
      paddingTop: 50,
      paddingStart: 20
    },
    menuItem: {
      fontSize: 18,
      marginVertical: 10,
    },
    row: {
      flexDirection:'row',
      gap: 12,
      alignItems: 'center'
    }
  });


export const toggleSideMenu = () => {
  Navigation.mergeOptions('centerComponentId', {
    sideMenu: {
      left: {
        visible: true, // Change to false to close the menu
      },
    },
  });
};


export default SideMenu;
