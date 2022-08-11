import React from 'react';
import { TouchableOpacity,Text,View } from 'react-native';
import StyleSheet from '../../assets/css/style'
import { Settings,Back }  from 'svg';
import { colors } from '../../constraints';

export const HomeHeader = (props) =>{
    const back = ()=>{
        props.navigation.goBack() 
    }
    const setting = ()=>{
        props.navigation.navigate('Setting') 
    }
    return(
    <View style={{marginTop:global.statusBarHeight}}>
    <View style={StyleSheet.signupHeader}>
    <View style={StyleSheet.flexRowSpaceBetween}>
    <TouchableOpacity onPress={()=>back()}><Back /></TouchableOpacity>
    <Text style={StyleSheet.headerHeading}>{props.step}</Text>
    {props.setting == undefined? 
    
    <TouchableOpacity onPress={()=>setting()}><Settings /></TouchableOpacity>
    
    : props.setting == 'help' ?

    <TouchableOpacity onPress={()=>setting()}><Text style={[StyleSheet.newlabel,{color:colors.primaryColor}]}></Text></TouchableOpacity>
:
null

    }
    {/* <TouchableOpacity onPress={()=>setting()}><Settings /></TouchableOpacity> */}
   </View>
   </View>
   </View>
   )
}