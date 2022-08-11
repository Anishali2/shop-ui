
import React from 'react';
import { TouchableOpacity,Text,View } from 'react-native';
import StyleSheet from '../../assets/css/style'
import { ArrowRight } from 'svg'
import { colors } from '../../constraints';
import { useNavigation } from '@react-navigation/native';
export const MainButton = (props)=>{
    const navigation = useNavigation()
    return(
       <>
        {
          props.righIcon==true ?
          <TouchableOpacity onPress={props.onPress} style={[StyleSheet.form_btn,StyleSheet.flexRowSpaceBetween]}>
           <View style={[StyleSheet.flexSpaceAround,{width:'100%'}]}>
            <View />
            <Text style={StyleSheet.btn_txt}>{props.text}</Text>
            <ArrowRight></ArrowRight>
            </View>
            </TouchableOpacity>
                :
            <TouchableOpacity onPress={props.onPress} style={[StyleSheet.form_btn]}>
                <Text style={[StyleSheet.btn_txt,{justifyContent:'center'}]}>{props.text}</Text>
            </TouchableOpacity>
            }
        </>
    )
}

export const OutlineButton = (props)=>{
    return(
        <TouchableOpacity onPress={props.onPress} style={props.border == undefined ?[StyleSheet.outlineBtn]:[StyleSheet.outlineBtn,{borderColor:colors.primaryColor}]}>
            <Text style={[StyleSheet.btn_txt,{color:colors.primaryColor,}]}>{props.text}</Text>
        </TouchableOpacity>
    )
}