import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import helpers from '../helpers/helpers';
import colors from '../values/colors';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Slider from '@react-native-community/slider';


interface Props { 
    onSelectAnother?:()=>void
    onCaptureAnother?:()=>void
    fileSize?:number,
    onSliderChange?:(value:number)=>void
    compressValue?:number,
    compressedPercent?:number
    onSlidingStart?:(value:number)=>void
    onSlidingComplete?:(value:number)=>void
}

const EditorTools: FC<Props> = ({onSelectAnother,onCaptureAnother,fileSize,onSliderChange,compressValue,compressedPercent,onSlidingStart,onSlidingComplete}): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={onSelectAnother} style={styles.btn}>
                    <Icon name='folder' color={colors.white} />
                    <Text style={styles.text}>Select Another</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onCaptureAnother} style={styles.btn}>
                    <Icon name='camera' color={colors.white} />
                    <Text style={styles.text}>Capture Another</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Compress to: {compressedPercent}%</Text>
                <Text style={styles.infoText}>Image Size: {fileSize}kb</Text>
            </View>
            <View style={styles.sliderContainer}>
                <Slider
                    minimumValue={0.1}
                    maximumValue={1}
                    value={compressValue}
                    style={{width:"100%",height:40}}
                    maximumTrackTintColor={colors.main80}
                    minimumTrackTintColor={colors.main}
                    thumbTintColor={colors.main}
                    onValueChange={onSliderChange}
                    onSlidingStart={onSlidingStart}
                    onSlidingComplete={onSlidingComplete}
                    
                />
            </View>

            
        </View>
    )
}

export default EditorTools;

const styles = StyleSheet.create({
    container: {
        padding: helpers.px(10),
        borderRadius: helpers.px(7),
        backgroundColor: colors.white,
        elevation: 15,
        marginBottom: 10,
        paddingBottom: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.main,
        padding: helpers.px(10),
        borderRadius: helpers.px(8),
        gap: helpers.px(10)
    },
    text: {
        ...helpers.fontStyle('Regular', 16, colors.white)
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: helpers.px(10)
    },
    infoText: {
        ...helpers.fontStyle('Regular', 14)
    },
    sliderContainer:{
        paddingVertical:helpers.px(20)
    }
})