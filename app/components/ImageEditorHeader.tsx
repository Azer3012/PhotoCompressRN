import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import colors from '../values/colors';
import helpers from '../helpers/helpers';
import UtilityButtons from './UtilityButtons';

interface Props{}

const ImageEditorHeader:FC<Props> = ():JSX.Element => {
  return (
    <View style={styles.container}>
        <UtilityButtons.Back/>
        <UtilityButtons.Save/>
    </View>
  )
}

export default ImageEditorHeader;

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between'

  },
 
})