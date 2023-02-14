import { Linking, StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import ConfirmModal from './ConfirmModal';

interface Props { 
    visible:boolean
    title:string,
    message:string
    onClose:()=>void

}

const PermissionWarning: FC<Props> = ({visible,onClose,title,message}): JSX.Element => {
    const handleOpenSettings=():void=>{
        onClose()
        Linking.openSettings()
      }
    return (
        <ConfirmModal
            visible={visible}
            primaryBtnTitle='Open Setting'
            dangerBtnTitle='I will not!'
            title={title}
            message={message}
            onDangerBtnPress={onClose}
            onPrimaryBtnPress={handleOpenSettings}

        />
    )
}

export default PermissionWarning;

const styles = StyleSheet.create({
    container: {}
})