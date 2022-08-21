import React,{useState,useEffect} from "react";
import { Text,View, TouchableOpacity,ScrollView,Image } from 'react-native';
import StyleSheet from '../../assets/css/style'
import {MyContainer} from '../../components/MainComponents/';
import {MyProfile,Payment,Addresses,NotificationsIcon,HelpCircle,InviteFriends} from 'svg'
import BottomNavigationCustom from "../../components/MainComponents/BottomNavigationCustom";
import { useNavigation } from '@react-navigation/native';
import { colors } from "../../constraints";

const SalesSummary = (props) =>{
    const navigation = useNavigation()
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(true)

const navigate = (value) => {
    navigation.navigate(value)
}
    return(
    <View style={[StyleSheet.whiteBackground]}>
    <View style={StyleSheet.leftPadding}>
        <MyContainer title={"Sales Summary"}/>
    </View>


    <View style={[StyleSheet.line,{marginVertical:20,borderWidth:0}]}/>
    <View style={StyleSheet.leftPadding}>
        {["01 /01/20220","02 /04/20220","05 /02/20220","02 /09/20220"].map((item,index) => (
        <TouchableOpacity key={index} style={[StyleSheet.flexRowSpaceBetween,{borderColor:"#cfcfcf",borderRadius:6,borderWidth:1,padding:4,paddingTop:12,marginBottom:20}]} onPress={() => navigate('Chat')}>
            <View style={{display:"flex",flexDirection:"row"}}>
            <View style={{marginBottom:10,paddingLeft:10}}>
            <Text style={[StyleSheet.newlabel,{fontWeight:"800"}]}>{item}</Text>

            </View>
            </View>
            <Text style={{color:"#b7b7b7",marginTop:-10,marginRight:10}}>45 Min.</Text>
        </TouchableOpacity>
            ))}
    
   </View>

    </View> 
    )
}
export default SalesSummary
