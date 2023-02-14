import { Image, StyleSheet, View } from 'react-native';
import React, { FC, ReactNode } from 'react';
import helpers from '../helpers/helpers';
import colors from '../values/colors';

interface Props{
    uri:string,
    children?:ReactNode
}

const SelectedImage:FC<Props> = ({uri,children}):JSX.Element | null => {
  if(!uri) return null
  return (
    <View style={styles.container}>
       {children ||  <Image style={styles.image} source={{uri:uri}}/>}
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
    backgroundColor:colors.white,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:'100%',
    height:'100%'
  }
})