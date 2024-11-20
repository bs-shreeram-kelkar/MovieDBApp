import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons'; // Using Ionicons as an example

const LoginScreen = () => {
  const onLogin = async () => {
    // Load icons asynchronously
    const homeIcon = await Icon.getImageSource('home-outline', 30, '#000');
    const profileIcon = await Icon.getImageSource('person-outline', 30, '#000');

    // Navigate to the tab-based layout with icons
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
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'Home',
                    icon: homeIcon, // Vector icon for Home
                    selectedIconColor: '#007AFF',
                    unselectedIconColor: '#8E8E93',
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
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'Profile',
                    icon: profileIcon, // Vector icon for Profile
                    selectedIconColor: '#007AFF',
                    unselectedIconColor: '#8E8E93',
                  },
                },
              },
            },
          ],
        },
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={onLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default LoginScreen;
