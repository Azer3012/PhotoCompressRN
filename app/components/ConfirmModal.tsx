import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import Modal from 'react-native-modal'
import colors from '../values/colors';
import helpers from '../helpers/helpers';

interface Props{
    visible?:boolean
    title?:string,
    message?:string
    onCancelPress?:()=>void
    onDiscardPress?:()=>void
}

const ConfirmModal:FC<Props> = ({visible,title,message,onCancelPress,onDiscardPress}):JSX.Element => {
  return (
    <Modal isVisible={visible}>
        <View style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.modalTitle}>{title}</Text>
                <Text style={styles.message}>{message}</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={onCancelPress} style={[styles.btnStyle,styles.cancel]}>
                        <Text style={styles.btnText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onDiscardPress} style={[styles.btnStyle,styles.discard]}>
                        <Text style={[styles.btnText,{color:colors.white}]}>Discard</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default ConfirmModal;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modal:{
    width:'80%',
    backgroundColor:colors.white,
    borderRadius:helpers.px(8),
    padding:helpers.px(10),
    
  },
  modalTitle:{
    ...helpers.fontStyle('Bold',18,colors.main)
  },
  message:{
    paddingTop:helpers.px(5),
    ...helpers.fontStyle("Light",16),
    
  },
  btnContainer:{
    flexDirection:'row',
    alignItems:'center',
    gap:helpers.px(10),
    paddingTop:helpers.px(15)
  },
  btnStyle:{
    justifyContent:'center',
    alignItems:'center',
    height:helpers.px(40),
    paddingHorizontal:helpers.px(15),
    borderRadius:helpers.px(8),

  },

  cancel:{
    borderWidth:1,
    borderColor:colors.main,
    
  },
  discard:{
    backgroundColor:colors.red
  },
  btnText:{
    ...helpers.fontStyle("Light",16)
  }
})