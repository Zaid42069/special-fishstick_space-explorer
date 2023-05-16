import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleObjectPress = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleObjectPress}>
        <Image
          source={isZoomed ? require('./zoomed_image.png') : require('./normal_image.png')}
          style={styles.image}
          resizeMode={isZoomed ? 'contain' : 'cover'}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
  },
});
