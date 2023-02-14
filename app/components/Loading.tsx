import { ActivityIndicator, StyleSheet,  } from 'react-native';
import React, { FC } from 'react';
import colors from '../values/colors';

interface Props{
    visible:boolean
}

const Loading:FC<Props> = ({visible}):JSX.Element | null => {

    if(!visible) return null;
  return (
    <ActivityIndicator size={'large'} color={colors.main}/>
  )
}

export default Loading;

const styles = StyleSheet.create({
  container:{}
})