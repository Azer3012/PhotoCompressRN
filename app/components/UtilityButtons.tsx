import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import  Icon  from 'react-native-vector-icons/AntDesign';
import helpers from '../helpers/helpers';
import colors from '../values/colors';

interface Props { }

const Back: FC<Props> = (): JSX.Element => {
    return (
        <TouchableOpacity style={styles.btn}>
            <Icon name='arrowleft' size={15} color={colors.main} />
        </TouchableOpacity>
    )
}

const Save: FC<Props> = (): JSX.Element => {
    return (
        <TouchableOpacity style={styles.btn}>
            <Icon name='download' size={15} color={colors.main}/>
        </TouchableOpacity>
    )
}

const UtilityButtons:{Back:FC;Save:FC}={
    Back,
    Save
}



export default UtilityButtons;

const styles = StyleSheet.create({
    
    btn:{
        width:helpers.px(45),
        height:helpers.px(45),
        backgroundColor:colors.white,
        borderRadius:helpers.px(50),
        justifyContent:'center',
        alignItems:'center'
      }
})