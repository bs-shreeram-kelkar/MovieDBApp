import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { FasterImageView } from '@candlefinance/faster-image';

interface ImageDisplayProps {
  url: string;
  width: number;
  height: number;
  style?: ViewStyle;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ url, width, height, style }) => {
  return (
    <View style={[styles.container, style]}>
      <FasterImageView
        style={{ width, height}} // Use width to make it circular if needed
        source={{
          transitionDuration: 0.3,
          cachePolicy: 'discWithCacheControl',
          showActivityIndicator: true,
          url: url,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ImageDisplay;
