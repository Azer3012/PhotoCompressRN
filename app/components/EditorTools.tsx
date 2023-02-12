import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import helpers from '../helpers/helpers';
import colors from '../values/colors';
import Icon from 'react-native-vector-icons/FontAwesome5'

interface Props { }

const EditorTools: FC<Props> = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}>
                    <Icon name='folder' color={colors.white} />
                    <Text style={styles.text}>Select Another</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Icon name='camera' color={colors.white} />
                    <Text style={styles.text}>Capture Another</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Compress to: 50%</Text>
                <Text style={styles.infoText}>Image Size: 50kb</Text>
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
        marginBottom:10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn: {
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:colors.main,
        padding:helpers.px(10),
        borderRadius:helpers.px(8),
        gap:helpers.px(10)
    },
    text: {
        ...helpers.fontStyle('Regular',16,colors.white)
    },
    infoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:helpers.px(10)
    },
    infoText:{
        ...helpers.fontStyle('Regular',14)
    }
})