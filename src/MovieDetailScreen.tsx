import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';

const MovieDetailScreen = ({ route, navigation }) => {
  const { movieID } = route.params;

  return (
    <SafeAreaView>
        <Text>
            movieID {movieID}
        </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default MovieDetailScreen;
