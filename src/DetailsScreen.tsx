// DetailsScreen.js
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';

const DetailsScreen = ({ route, navigation }) => {
  // Retrieve the `pokemonName` parameter passed from HomeScreen
  const { pokemonName } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Pokémon Details" />
        <Card.Content>
          <Text style={styles.pokemonName}>Name: {pokemonName}</Text>
          <Text style={styles.description}>Additional details about {pokemonName} would go here.</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="outlined" onPress={() => navigation.goBack()}>Go Back</Button>
        </Card.Actions>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    padding: 16,
  },
  pokemonName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 8,
    fontSize: 16,
  },
});

export default DetailsScreen;
