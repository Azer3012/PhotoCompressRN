import { Image, StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import helpers from '../helpers/helpers';
import colors from '../values/colors';

interface Props{
    uri:string
}

const SelectedImage:FC<Props> = ({uri}):JSX.Element => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:uri}}/>
    </View>
  )
}

export default SelectedImage;

const styles = StyleSheet.create({
  container:{
    width:helpers.px(206),
    height:helpers.px(265),
    elevation:15,
    padding:helpers.px(10),
    backgroundColor:colors.white
  },
  image:{
    width:'100%',
    height:'100%'
  }
})