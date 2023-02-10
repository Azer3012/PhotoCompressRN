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

        const { NEVER_ASK_AGAIN, DENIED } = PermissionsAndroid.RESULTS

        if (granted === NEVER_ASK_AGAIN) return Alert.alert
            ("Fail to open camera", "it is looks like you have disabled the camera permission")
        if (granted === DENIED) return Alert.alert
            ("Sorry but to use this feature you have to accept the Camera Permission!")
    } catch (error) {
        console.log(error);

    }

}

export const selectImage = async (width:number=413,height:number=531):Promise<{path:string;error:unknown | null}> => {
    try {
        const { path } = await ImagePicker.openCamera({
            width,
            height,
            cropping: true
        })
        return {path,error:null}
    }
    catch (error) {
       return {path:'',error}
    }
}