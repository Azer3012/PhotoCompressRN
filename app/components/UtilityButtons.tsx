import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import helpers from '../helpers/helpers';
import colors from '../values/colors';

interface Props { 
    onPress?:()=>void
}

const Back: FC<Props> = ({onPress}): JSX.Element => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Icon name='arrowleft' size={15} color={colors.main} />
        </TouchableOpacity>
    )
}

const Save: FC<Props> = ({onPress}): JSX.Element => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Icon name='download' size={15} color={colors.main} />
        </TouchableOpacity>
    )
}

const UtilityButtons: { Back: FC<Props>; Save: FC<Props> } = {
    Back,
    Save
}



export default UtilityButtons;

const styles = StyleSheet.create({

    btn: {
        width: helpers.px(45),
        height: helpers.px(45),
        backgroundColor: colors.white,
        borderRadius: helpers.px(50),
        justifyContent: 'center',
        alignItems: 'center'
    }
})