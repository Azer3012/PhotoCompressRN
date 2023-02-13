import { StyleSheet, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import Layout from '../../Layout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Stacks/Stacks';
import ImageEditorHeader from '../../components/ImageEditorHeader';
import helpers from '../../helpers/helpers';
import BackgroundImage from '../../components/BackgroundImage';
import SelectedImage from '../../components/SelectedImage';
import EditorTools from '../../components/EditorTools';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { selectImage, selectImageFromDevice } from '../../utils/utils';
import ConfirmModal from '../../components/ConfirmModal';

type RouteProps = NativeStackScreenProps<RootStackParamList, 'ImageEditor'>
interface Props {
    route: RouteProps['route']
}

const ImageEditor: FC<Props> = ({ route }): JSX.Element => {
    const [selectedImage,setSelectedImage]=useState<string>('')
    const [showConfirmModal,setShowConfirmModal]=useState<boolean>(false)
    const { imageUri } = route.params

    const navigation=useNavigation<NavigationProp<RootStackParamList>>()

    const handleCapture=async():Promise<void>=>{
        const { path, error } = await selectImage()
        setSelectedImage(path)
    }
    const handleSelect=async():Promise<void>=>{
        const {path, error}=await selectImageFromDevice()
        setSelectedImage(path)
       
    }
    //Handling back press
    const handleMoveToBackPress=():void=>{
        navigation.removeListener("beforeRemove",()=>{})
        hideConfirmModal()
        navigation.goBack()
    }
    const displayConfirmModal=():void=>{
        setShowConfirmModal(true)
    }
    const hideConfirmModal=():void=>{
        setShowConfirmModal(false)
    }
    useEffect(()=>{
        navigation.addListener('beforeRemove',(e)=>{
            e.preventDefault()
            displayConfirmModal()
        })
    },[])
    return (
        <View style={styles.container}>
            <ImageEditorHeader />
            <BackgroundImage />
            <View style={styles.imageContainer}>
                <SelectedImage uri={selectedImage || imageUri} />
            </View>
            <EditorTools onCaptureAnother={handleCapture} onSelectAnother={handleSelect}/>
            <ConfirmModal
                title='Are you sure?'
                message='Are you sure because this action will discard all your changes'
                visible={showConfirmModal}
                onCancelPress={hideConfirmModal}
                onDiscardPress={handleMoveToBackPress}
            />
        </View>


    )
}

export default ImageEditor;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: helpers.px(16),
        paddingTop: helpers.px(23)
    },
    imageContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})