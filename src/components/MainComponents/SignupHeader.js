import React from 'react';
import { TouchableOpacity,Text,View } from 'react-native';
import StyleSheet from '../../assets/css/style'
import { Settings,Back,Close }  from 'svg';
import { colors } from '../../constraints';

export const SignupHeader = (props) =>{
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
        {props.drawer == undefined ? 
        <TouchableOpacity onPress={()=>back()}><Text>Hello</Text></TouchableOpacity> :
        <TouchableOpacity onPress={()=>back()}><Text>Hello</Text></TouchableOpacity>
        }
    <Text style={StyleSheet.headerHeading}>{props.step}</Text>
    { props.setting == undefined ?
    
    <TouchableOpacity onPress={()=>setting()}><Text>Hello</Text></TouchableOpacity>
    
    : 
    <TouchableOpacity onPress={()=>setting()}><Text style={[StyleSheet.newlabel,{color:colors.primaryColor}]}>Help</Text></TouchableOpacity>
    
    }
   </View>
   </View>
   </View>
   )
}