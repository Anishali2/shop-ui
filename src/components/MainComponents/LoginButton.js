
import React from 'react';
import { TouchableOpacity,Text,View } from 'react-native';
import StyleSheet from '../../assets/css/style'
import { ArrowRight } from 'svg'
import { colors } from '../../constraints';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
export const LoginButton = (props)=>{
    const navigation = useNavigation()
    return(
       <>
           <Button onPress={props.onPress} labelStyle={{color:"white"}} contentStyle={[StyleSheet.loginButton]} mode="contained" >
    {props.text}
  </Button>
        </>
    )
}


export const OutlineButton = (props)=>{
    return(
        <Button onPress={props.onPress} labelStyle={{color:colors.primaryColor}} contentStyle={[StyleSheet.loginButton,{backgroundColor:"white",paddingHorizontal:30}]} mode="contained" >
            {props.text}
            </Button>

    )
}