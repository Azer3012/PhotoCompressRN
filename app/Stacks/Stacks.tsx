import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import helpers from '../helpers/helpers';
import { Home, ImageEditor } from '../screens';

export type RootStackParamList={
  Home:undefined,
  ImageEditor:{imageUri:string}
}

const Stack=createNativeStackNavigator<RootStackParamList>()

interface Props{}

const Stacks:FC<Props> = ():JSX.Element => {
  return (
    <Stack.Navigator screenOptions={helpers.screenOptions}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='ImageEditor' component={ImageEditor}/>
    </Stack.Navigator>
  )
}

export default Stacks;

