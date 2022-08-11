import React,{useState,useEffect} from "react";
import { Text,View, TouchableOpacity,Keyboard,ScrollView } from 'react-native';
import StyleSheet from '../../assets/css/style'
import MyContainer from '../../components/MainComponents/MyContainer';
import { MainButton } from "../../components/MainComponents/MainButton";
import { colors } from "../../constraints";
import { SignupProgressBar } from "../../components/MainComponents/SignupProgressBar";
import { CheckBox } from '../../components/General'
import {Notifications} from 'svg'

const Notification = (props) =>{
    
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(true)
    const [keyboardStatus, setKeyboardStatus] = useState('true');
 

      const changeStatus = () =>{
          if(toggleCheckBox)return setToggleCheckBox(false)
          else return setToggleCheckBox(true)
      }
      const changeStatus1 = () =>{
        if(toggleCheckBox1)return setToggleCheckBox1(false)
        else return setToggleCheckBox1(true)
    }
      const onSubmit = () =>{
        props.navigation.navigate("AllSet")
      }

    return(
    <View style={[StyleSheet.whiteBackground]}>  
    <View style={StyleSheet.leftPadding}>

    <MyContainer {...props} step='Step 4'/>
    <SignupProgressBar value={1}/>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={StyleSheet.leftPadding}>
    <Text style={StyleSheet.signupHeading}>Enable Notifications</Text>
    <Text style={StyleSheet.signupSubHeading}>To get updates from us.</Text>
    </View>
    <View style={{justifyContent:"center",alignItems:"center",marginVertical:29,}}>
    <Notifications/>
    </View>
    <View style={StyleSheet.leftPadding}>

        <View style={StyleSheet.flexRowSpaceBetween}>
        <Text style={StyleSheet.label}>Delivery Updates</Text>
        <View style={{paddingTop:20}}>
         <TouchableOpacity onPress={() => changeStatus()} >
         <CheckBox checkStatus = {toggleCheckBox}/>
         </TouchableOpacity>
         </View>
        </View>
    <View style={[StyleSheet.line,{marginTop:30}]}/>
    <View style={StyleSheet.flexRowSpaceBetween}>
        <Text style={StyleSheet.label}>Sign up for promotional emails</Text>
        <View style={{paddingTop:20}}>
         <TouchableOpacity onPress={() => changeStatus1()} >
         <CheckBox checkStatus = {toggleCheckBox1}/>
         </TouchableOpacity>
         </View>
        </View>
    </View>

        <View style={[StyleSheet.flexEnd,StyleSheet.BottomButtonMargin,StyleSheet.leftPadding,{marginTop:30}]}>
            <MainButton  text={"Finish"} righIcon={false} onPress={() => onSubmit()}/>
        </View>
    </ScrollView>
    </View> 
    )
}
export default Notification
