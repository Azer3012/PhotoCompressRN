import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'

interface Props { }

const Home: FC<Props> = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>Choose Your Image</Text>
        <Text style={styles.description}>Choose Your Image</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Icon name="camera"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Icon name="folder"/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {},
  header: {},
  description: {},
  btnContainer: {},
  btn:{}
})