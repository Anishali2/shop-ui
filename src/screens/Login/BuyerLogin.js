import React,{useState,useEffect} from "react";
import { Text,View, TouchableOpacity,FlatList ,Image,Pressable,TextInput,ScrollView} from 'react-native';
import StyleSheet from '../../assets/css/style'
import { colors, fonts } from "../../constraints";
import { CheckBox } from '../../components/General'
import { Mail,Plus }  from 'svg'
import { MainButton } from "../../components/MainComponents/MainButton"
import MyContainer from "../../components/MainComponents/MyContainer";
import {MiniMainButton} from "../../components/MainComponents/MiniMainButton"
import { Eye, Facebook, Google, LoginCart, Password } from "../../assets/svg";
import { LoginButton } from "../../components/MainComponents/LoginButton";
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "react-native-paper";
const BuyerLogin = (props) =>{
    
    const [keyboardStatus, setKeyboardStatus] = useState('true');
      const onSubmit = () => { 
        props.navigation.navigate("Account")
      }
    return(
    <View style={[StyleSheet.whiteBackground]}>  
    <View style={[StyleSheet.leftPadding,{paddingTop:1}]}>

    <MyContainer {...props} step='' drawer={"close"} />
    </View>

    


    <View style={[StyleSheet.leftPadding,{paddingTop:0}]}>
            <Text style={[StyleSheet.header,StyleSheet.semi_bold]}>Buyer Login </Text>
            <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:10}}>

            <LoginCart/>
            </View>
    <Text style={StyleSheet.inputLabel}>Email</Text>
    <View style={[StyleSheet.input]}>
      <Mail style={{marginLeft:14}} />
        <TextInput
            style={StyleSheet.inputText}
            placeholder='john@gmail.com'
            placeholderTextColor={colors.greyColor}
            color={"black"}
            />
    </View>
    <Text style={StyleSheet.inputLabel}>Password</Text>
    <View style={[StyleSheet.input]}>

      <Password style={{marginLeft:14}} />
        <TextInput
            style={[StyleSheet.inputText,{width:"76%"}]}
            placeholder='********'
            placeholderTextColor={colors.greyColor}
            color={"black"}
             secureTextEntry={true}
            />

      <Eye />
    </View>
    <Text style={StyleSheet.forgetPass}>Forget Password?</Text>

</View>
    {/**
     *  ___________________
     * |                   |
     * |       Login       | 
     * |___________________|
     *  
    */}
    {
        keyboardStatus == 'true' ? 
        <View style={[StyleSheet.flexEnd,StyleSheet.BottomButtonMargin,StyleSheet.leftPadding]}>
            <LoginButton  text={"Login"} righIcon={false} onPress={() => onSubmit()}/>
        </View>
    : null
   }
   
   <Text style={StyleSheet.semi_bold}>Or</Text>
        <View style={[StyleSheet.flexEnd,StyleSheet.BottomButtonMargin,StyleSheet.leftPadding]}>
 <Button onPress={() => console.log("Google Button")} contentStyle={[StyleSheet.loginButton,{backgroundColor:"#f83c3b"}]} mode="contained" >
    Login with Google
  </Button>

    </View> 
    <View style={[StyleSheet.flexEnd,StyleSheet.BottomButtonMargin,StyleSheet.leftPadding]}>
 <Button icon={<Facebook/>} onPress={()=> console.log("Facebook Button")} contentStyle={[StyleSheet.loginButton,{backgroundColor:"#3B5999"}]} mode="contained" >
  
   Login with FaceBook
  </Button>

    </View> 
    </View> 
    )
}
export default BuyerLogin
