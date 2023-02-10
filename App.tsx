import { StyleSheet} from 'react-native'
import React, { FC } from 'react'
import Stacks from './app/Stacks/Stacks'
import { NavigationContainer } from '@react-navigation/native'

interface Props{}

const App:FC<Props> = (props):JSX.Element => {
  return (
    <NavigationContainer>
     <Stacks/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})