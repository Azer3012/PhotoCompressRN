import { Linking, StyleSheet, Text, View } from 'react-native';
import React, { FC, useState } from 'react';
import helpers from '../../helpers/helpers';
import LargeButton from '../../components/LargeButton';
import { checkCameraPermision, requestCameraPermission, selectImage, selectImageFromDevice } from '../../utils/utils';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../Stacks/Stacks';
import ConfirmModal from '../../components/ConfirmModal';
import PermissionWarning from '../../components/PermissionWarning';

interface Props {
  navigation: NavigationProp<RootStackParamList>
}





const Home: FC<Props> = ({ navigation }): JSX.Element => {


  const [showPermision,setShowPermision]=useState<boolean>(false)
  const handleImageCapture = async (): Promise<void> => {

    await requestCameraPermission()

    const { path, error } = await selectImage()
    let isGranted: boolean = false
    if (error) {
      isGranted = await checkCameraPermision()
      if (!isGranted) return setShowPermision(true);
      return;
    }
   

    navigation.navigate("ImageEditor", { imageUri: path })
  }
  const handleImageSelection = async (): Promise<void> => {

    await requestCameraPermission()


    const { path, error } = await selectImageFromDevice()

    let isGranted: boolean = false
    if (error) isGranted = await checkCameraPermision()
    if (!isGranted) return console.log("Not granted");

    if(!path){
      return
    }
    navigation.navigate("ImageEditor", { imageUri: path })


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

      <PermissionWarning
        visible={showPermision}
        title='Required Camera Permision'
        message='This app is heavily best on camera so you gave to accept the permision'

        onClose={()=>setShowPermision(false)}
        
      
      />
     
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