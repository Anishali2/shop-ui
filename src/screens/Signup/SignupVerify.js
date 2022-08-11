import React,{useState} from "react";
import { Text,View, TouchableOpacity,TextInput,ScrollView } from 'react-native';
import StyleSheet from '../../assets/css/style'
import MyContainer from '../../components/MainComponents/MyContainer';
import { MainButton } from "../../components/MainComponents/MainButton";
import { colors } from "../../constraints";

const SignupVerify = (props) =>{
    const [code,setCode]=useState('')

    const resend = ()=>{

    }
    const onSubmit = ()=>{
        props.navigation.navigate("PersonalInfo")
    }
    return (
        <View style={[StyleSheet.whiteBackground,StyleSheet.leftPadding]}>  
        <MyContainer {...props} />
       <View style={[StyleSheet.splashScreen,{backgroundColor:"transparent"}]}>

        <Text style={[StyleSheet.blackBold,{fontSize:25,color:colors.primaryColor,paddingVertical:10}]}>Check your Mail</Text>
        <Text style={[StyleSheet.blackBold,{color:colors.greyColor}]}>We've sent an activation link to </Text>
        <Text style={[StyleSheet.blackBold,{color:"black",paddingBottom:20}]}>Fazsam.com@gmail.com </Text>
        <Text style={[StyleSheet.blackBold,{color:colors.greyColor}]}>Click on the Link on your mail </Text>
        <Text style={[StyleSheet.blackBold,{color:colors.greyColor}]}>to activate your account </Text>
        </View> 

        </View>
    )
}
export default SignupVerify