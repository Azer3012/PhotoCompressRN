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
import fsModule from '../../modules/fsModules';
import Loading from '../../components/Loading';

type RouteProps = NativeStackScreenProps<RootStackParamList, 'ImageEditor'>
interface Props {
    route: RouteProps['route']
}

const ImageEditor: FC<Props> = ({ route }): JSX.Element => {
    const [selectedImage, setSelectedImage] = useState<string>('')
    const [compressedImage, setCompressedImage] = useState<string>('')
    const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false)
    const [fileSize, setFileSize] = useState<number>(0)
    const [compressValue, setCompressValue] = useState<number>(1)
    const [compressedPercent, setCompressedPercent] = useState<number>(100)
    const [compressionStarts, setCompressionStarts] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const { imageUri } = route.params

    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    const handleCapture = async (): Promise<void> => {
        const { path, error } = await selectImage()
        resetActivity()
        getImageSize(path)

        setSelectedImage(path)
    }
    const handleSelect = async (): Promise<void> => {
        const { path, error } = await selectImageFromDevice()
        resetActivity()
        getImageSize(path)

        setSelectedImage(path)

    }
    //Handling back press
    const handleMoveToBackPress = (): void => {
        navigation.goBack()
        hideConfirmModal()
    }

    const displayConfirmModal = (): void => {
        setShowConfirmModal(true)
    }
    const hideConfirmModal = (): void => {
        setShowConfirmModal(false)

        
    }

    const getImageSize = async (imageUri: string): Promise<void> => {

        const uri: string = imageUri.split('file:///')[1]
        const size = await fsModule.getSize(uri)


        setFileSize(parseFloat((size / 1000).toFixed(2)))

    }

    const handleImageCompress = async (value: number): Promise<void> => {
        if (!compressionStarts) return
        const compressValue: number = Math.floor(value * 100)
        const uri: string = selectedImage.split('file:///')[1]
        setLoading(true)

        const res = await fsModule.compressImage(uri, compressValue)

        setLoading(false)


        setCompressedImage('file:///' + res.uri)
        setFileSize(parseFloat((res.size / 1000).toFixed(2)))
        setCompressedPercent(Math.round(value * 100))

    }

    const updateCompressValue = (value: number): void => {
        setCompressValue(value)
    }

    const resetActivity = (): void => {
        setCompressValue(1)
        setCompressedPercent(100)
        setCompressedImage('')

    }
    const handleImageSave = async (): Promise<void> => {
        try {
            const name = 'pp-' + Date.now()
            const uri: string = compressedImage.split('file:///')[1]
            const test: number = Math.floor(compressValue * 100)

            const res = await fsModule.saveImageToDevice(uri, name, test)
            console.log(res);
            
        } catch (error) {
            console.log(error);

        }

    }
    
    useEffect(() => {

        if (imageUri && !selectedImage) {
            setSelectedImage(imageUri)
            getImageSize(imageUri)

        }

    }, [imageUri])
    return (
        <View style={styles.container}>
            <ImageEditorHeader onBackPress={displayConfirmModal} onSavePress={handleImageSave} />
            <BackgroundImage />
            <View style={styles.imageContainer}>
                <SelectedImage uri={compressedImage || selectedImage}>
                    {loading && <Loading visible={loading} />}
                </SelectedImage>
            </View>
            <EditorTools
                onCaptureAnother={handleCapture}
                onSelectAnother={handleSelect}
                fileSize={fileSize}
                onSliderChange={handleImageCompress}
                compressValue={compressValue}
                compressedPercent={compressedPercent}
                onSlidingStart={() => setCompressionStarts(true)}
                onSlidingComplete={updateCompressValue}
            />
            <ConfirmModal
                title='Are you sure?'
                message='Are you sure because this action will discard all your changes'
                visible={showConfirmModal}
                primaryBtnTitle="Cancel"
                dangerBtnTitle='Discard'
                onPrimaryBtnPress={hideConfirmModal}
                onDangerBtnPress={handleMoveToBackPress}
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
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})