import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import UtilityButtons from './UtilityButtons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../Stacks/Stacks';


interface Props {
    onSavePress?:()=>void,
    onBackPress?:()=>void
 }

const ImageEditorHeader: FC<Props> = ({onSavePress,onBackPress}): JSX.Element => {
    const navigation=useNavigation<NavigationProp<RootStackParamList>>()
    return (
        <View style={styles.container}>
            
            <UtilityButtons.Back onPress={onBackPress} />
            <UtilityButtons.Save onPress={onSavePress} />
        </View>
    )
}

export default ImageEditorHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

})