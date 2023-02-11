import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import Layout from '../../Layout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Stacks/Stacks';
import ImageEditorHeader from '../../components/ImageEditorHeader';
import helpers from '../../helpers/helpers';

type RouteProps=NativeStackScreenProps<RootStackParamList,'ImageEditor'>
interface Props {
    route:RouteProps['route']
 }

const ImageEditor: FC<Props> = ({route}): JSX.Element => {
    const {imageUri}=route.params
    return (
            <View style={styles.container}>
                <ImageEditorHeader/>
            </View>
       

    )
}

export default ImageEditor;

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:helpers.px(16),
        paddingTop:helpers.px(23)
    }
})