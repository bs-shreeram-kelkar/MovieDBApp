/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{ useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'; // Import Icon from Ionicons
import axios from 'axios';
import Login from './src/login'


import {
  Card,
  Title,
  Paragraph,
  List,
  PaperProvider,
  Text,
} from 'react-native-paper';

import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
  Button,
} from 'react-native-paper';
import merge from 'deepmerge';


const MyComponent = () => (
  <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
);


import {
  MD2DarkTheme,
  MD2LightTheme,
} from 'react-native-paper';



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(MD3DarkTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(MD3DarkTheme, NavigationDefaultTheme);

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function HomeScreen({ navigation }): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [pokemonList, setPokemonList] = useState([]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1c1c1c' : '#f5f5f5',
  };

  useEffect(() => {
    // Fetching data from the PokeAPI using axios
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => setPokemonList(response.data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  

  return (
    <View>
      <Text>Hello, this is the Home Screen!</Text>

    <Card>
      <Card.Content>
        <Title>title </Title>
        <Paragraph>contnet</Paragraph>
      </Card.Content>
    </Card>
      <FlatList
        data={pokemonList}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', { pokemonName: item.name })}
          >
            <Text theme={CombinedDarkTheme} variant="displayMedium" >{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      </View>
  );
}

function DetailsScreen({ route }) {
  // Retrieve the parameter passed from HomeScreen
  const { pokemonName } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Pokémon Details</Text>
      <Text style={styles.pokemonName}>Name: {pokemonName}</Text>
      <MyComponent />
    </SafeAreaView>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';




  return (
  <PaperProvider theme={CombinedDarkTheme}>
    <NavigationContainer theme={CombinedDarkTheme}>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }} />

      {/* <HomeScreen /> */}
      </Stack.Navigator>

     </NavigationContainer>
  </PaperProvider>
  );
}

function TabScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Tab.Navigator initialRouteName="HomeTab"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'HomeTab') {
          iconName = 'home-outline';
        } else if (route.name === 'Details') {
          iconName = 'information-circle-outline';
        }
        // Return the icon component
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#2f95dc', // Active icon color
      tabBarInactiveTintColor: 'gray',  // Inactive icon color
      headerShown: false,
    })}>
    <Tab.Screen name="HomeTab" component={HomeTab} />
    <Tab.Screen name="Details" component={SecondTab} />
  </Tab.Navigator>
);
}


function HomeTab(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  );
}

function SecondTab(): React.JSX.Element {
  return (
    <SafeAreaView>
    <View>
      <Text> Hello world</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

});

export default App;
