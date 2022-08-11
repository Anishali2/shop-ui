

import React,{useState,useEffect} from "react";
import { Text,View, TextInput,ScrollView} from 'react-native';
import StyleSheet from '../../assets/css/style'
import { colors, fonts } from "../../constraints";
import { Mail,Plus }  from 'svg'
import MyContainer from "../../components/MainComponents/MyContainer";
import { Back, Eye, Facebook, Google, LoginCart, Password } from "../../assets/svg";
import { LoginButton } from "../../components/MainComponents/LoginButton";
import { Button } from "react-native-paper";
const BuyerSignup = (props) =>{
    
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
        <View style={StyleSheet.flexRowSpaceBetween}>
        <Back onPress={() => 
            props.navigation.goBack()
        } color={{backgroundColor:"gray"}}/>
            <Text style={[StyleSheet.header,StyleSheet.semi_bold]}>Seller Signup</Text>
          <View></View>  
        </View>
    <Text style={StyleSheet.inputLabel}>Name</Text>
      <View style={[StyleSheet.input]}>
      <Mail style={{marginLeft:14}} />
        <TextInput
            style={StyleSheet.inputText}
            placeholder='Name'
            placeholderTextColor={colors.greyColor}
            color={"black"}
            />
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
    <Text style={StyleSheet.inputLabel}>Confirm Password</Text>
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
    <Text style={StyleSheet.forgetPass}> </Text>

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
            <LoginButton  text={"Signup"} righIcon={false} onPress={() => onSubmit()}/>
        </View>
    : null
   }
   
        <View style={[StyleSheet.flexEnd,StyleSheet.BottomButtonMargin,StyleSheet.leftPadding]}>
 <Button onPress={() => console.log("Google Button")} contentStyle={[StyleSheet.loginButton,{backgroundColor:"#f83c3b"}]} mode="contained" >
    Signup with Google
  </Button>

    </View> 
    <View style={[StyleSheet.flexEnd,StyleSheet.BottomButtonMargin,StyleSheet.leftPadding]}>
 <Button icon={<Facebook/>} onPress={()=> console.log("Facebook Button")} contentStyle={[StyleSheet.loginButton,{backgroundColor:"#3B5999"}]} mode="contained" >
  
  Signup with Facebook
  </Button>

    </View> 
    </View> 
    )
}
export default BuyerSignup