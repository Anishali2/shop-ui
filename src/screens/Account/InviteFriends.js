import React,{useState,useEffect} from "react";
import { Text,View, TouchableOpacity,ScrollView } from 'react-native';
import StyleSheet from '../../assets/css/style'
import {MyContainer} from '../../components/MainComponents/';
import {RatingStar} from 'svg'
import BottomNavigationCustom from "../../components/MainComponents/BottomNavigationCustom";

const InviteFriends = (props) =>{
    
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(true)


    return(
    <View style={[StyleSheet.whiteBackground]}>  
    <View style={StyleSheet.leftPadding}>
    <Text style={[StyleSheet.signupHeading,{marginTop:49}]}>InviteFriends</Text>
    </View>


    <View style={[StyleSheet.line,{marginTop:20}]}/>
   
   <BottomNavigationCustom activeTab5={true}/>

    </View> 
    )
}
export default InviteFriends
