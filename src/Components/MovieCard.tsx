import React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple, Icon } from 'react-native-paper';
import { NavigationProps } from 'react-native-navigation';
import ImageDisplay from '../ImageDisplay';
import { navigateToMovieDetails } from '../Navigation/navigateToMovieDetails';

interface MovieCardProps {
  props: NavigationProps;
  item: {
    id: number;
    title: string;
    backdrop_path: string;
    vote_average: number;
  };
  getImageURL: (path: string) => string;
}

const MovieCardComponent: React.FC<MovieCardProps> = ({ props, item, getImageURL }) => {
  return (
    <TouchableRipple
      onPress={() => {
        navigateToMovieDetails(props.componentId, props, item.id.toString());
      }}
      rippleColor="gray"
    >
      <View style={{ padding: 12 }}>
        <ImageDisplay 
          url={getImageURL(item.backdrop_path)}
          width={214}
          height={120}
        />
        <Text variant="labelSmall">{item.title}</Text>
        <View style={{ flex: 1, flexDirection: 'row'}}>
          <Icon source="star" size={12} />
          <Text variant="labelSmall"> {item.vote_average} / 10</Text>
        </View>
      </View>
    </TouchableRipple>
  );
};

export default MovieCardComponent;
