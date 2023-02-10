import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import colors from '../values/colors';
import helpers from '../helpers/helpers';
import Icon from 'react-native-vector-icons/FontAwesome5'

interface Props {
    text: string,
    icon: string,
    onPress?:()=>void
}

const LargeButton: FC<Props> = ({ text, icon,onPress }): JSX.Element => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.btn}>
                <Icon style={styles.icon} name={icon} />
            </TouchableOpacity>
            <Text style={styles.text}>{text}</Text>
        </View>

    )
}

export default LargeButton;

const styles = StyleSheet.create({
    container: {
        gap: helpers.px(11)
    },
    btn: {
        width: helpers.px(100),
        height: helpers.px(80),
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.main,
        borderRadius: helpers.px(8)
    },
    icon: {
        color: colors.main,
        fontSize: helpers.px(35)
    },
    text: {
        ...helpers.fontStyle("Regular", 12),
        textAlign: 'center'
    }
})