import { StyleSheet} from 'react-native'
import React, { FC } from 'react'
import Stacks from './app/Stacks/Stacks'
import { NavigationContainer } from '@react-navigation/native'
import RNBootSplash from "react-native-bootsplash";

interface Props{}

const App:FC<Props> = (props):JSX.Element => {
  return (
    <NavigationContainer onReady={()=>RNBootSplash.hide({fade:true})}>
     <Stacks/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})