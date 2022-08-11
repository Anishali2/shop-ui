import React,{useState} from "react";
import { Text,View, TouchableOpacity,TextInput,ScrollView } from 'react-native';
import StyleSheet from '../../assets/css/style'
import MyContainer from '../../components/MainComponents/MyContainer';
import { MainButton } from "../../components/MainComponents/MainButton";
import { colors } from "../../constraints";

const PhoneVerify = (props) =>{
    const [code,setCode]=useState('')

    const resend = ()=>{

    }
    const onSubmit = ()=>{
        props.navigation.navigate("PersonalInfo")
    }
    return (
        <View style={[StyleSheet.whiteBackground,StyleSheet.leftPadding]}>  
        <MyContainer {...props} />
        <ScrollView>
        

        </ScrollView>
        </View>
    )
}
export default PhoneVerify