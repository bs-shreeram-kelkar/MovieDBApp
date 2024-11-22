import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const SnapCarouselExample = () => {
  // Sample random text data
  const [data] = useState([
    { id: '1', text: 'React Native is awesome!' },
    { id: '2', text: 'Snap Carousel is fun to use!' },
    { id: '3', text: 'Render random text easily!' },
    { id: '4', text: 'Build beautiful UIs!' },
    { id: '5', text: 'This is another random text!' },
  ]);

  // Render each item
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.8}
        layout="default"
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});

export default SnapCarouselExample;
