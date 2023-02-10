import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import helpers from '../../helpers/helpers';
import LargeButton from '../../components/LargeButton';
import { requestCameraPermission, selectImage, selectImageFromDevice } from '../../utils/utils';

interface Props { }

const Home: FC<Props> = (): JSX.Element => {


  const handleImageCapture = async (): Promise<void> => {
    if (!helpers.isIOS) {
      await requestCameraPermission()
    }
    const { path, error } = await selectImage()

  }
  const handleImageSelection=async():Promise<void>=>{

    const {path, error}=await selectImageFromDevice()
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>Choose Your Image</Text>
        <Text style={styles.description}>
          You Can select your image using one
          of the theese option which you want
          to convert to passport size
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <LargeButton text='Capture' icon='camera' onPress={handleImageCapture} />
        <LargeButton text='Select' icon='folder' onPress={handleImageSelection} />
      </View>
    </View>

  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: helpers.px(50),
    paddingHorizontal: helpers.px(16)
  },
  textContainer: {
    alignItems: 'center',
    gap: helpers.px(13),
    flex: 1
  },
  header: {
    ...helpers.fontStyle("Bold", 22)
  },
  description: {
    ...helpers.fontStyle("Regular", 12),
    textAlign: 'center'

  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: helpers.px(20)


  },

})