import { Image, StyleSheet, View } from 'react-native';
import React, { FC } from 'react';

interface Props{}

const BackgroundImage:FC<Props> = ():JSX.Element => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/images/bg.jpeg')} resizeMode="repeat"/>
    </View>
  )
}

export default BackgroundImage;

const styles = StyleSheet.create({
  container:{
    ...StyleSheet.absoluteFillObject,
    zIndex:-1,
    opacity:0.1
  },
  image:{
    width:'100%',
    height:'100%'
  }
})