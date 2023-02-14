import { Alert, PermissionsAndroid } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';

export const requestCameraPermission = async (): Promise<void> => {

    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
            title: "Camera Permission",
            message: "You have to accept the permission",
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        })

        // const { NEVER_ASK_AGAIN, DENIED } = PermissionsAndroid.RESULTS

        // if (granted === NEVER_ASK_AGAIN) return Alert.alert
        //     ("Fail to open camera", "it is looks like you have disabled the camera permission")
        // if (granted === DENIED) return Alert.alert
        //     ("Sorry but to use this feature you have to accept the Camera Permission!")
    } catch (error) {
        console.log(error);

    }

}

type ImageResultType = {
    path: string;
    error: unknown | null
}

export const selectImage = async (width: number = 413, height: number = 531): Promise<ImageResultType> => {
    try {

        const { path } = await ImagePicker.openCamera({
            width,
            height,
            cropping: true
        })
        return { path, error: null }
    }
    catch (error) {
        return { path: '', error }
    }
}
export const selectImageFromDevice = async (width: number = 413, height: number = 531): Promise<ImageResultType> => {
    try {
        const { path } = await ImagePicker.openPicker({
            width,
            height,
            cropping: true
        })
        return { path, error: null }
    }
    catch (error) {
        return { path: '', error }
    }
}

export const checkCameraPermision = async (): Promise<boolean> => {
    return await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)
}

export const readAndWritePermission = async (): Promise<boolean> => {
    const res=await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ])
    
    const writePermission= res["android.permission.WRITE_EXTERNAL_STORAGE"]
    const readPermission= res["android.permission.READ_EXTERNAL_STORAGE"]
    if(writePermission!=='granted') return false;

    return true;
    
}