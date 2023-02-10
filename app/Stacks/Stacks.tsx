import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import helpers from '../helpers/helpers';
import { Home } from '../screens';

const Stack=createNativeStackNavigator()

interface Props{}

const Stacks:FC<Props> = ():JSX.Element => {
  return (
    <Stack.Navigator screenOptions={helpers.screenOptions}>
        <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
  )
}

export default Stacks;

