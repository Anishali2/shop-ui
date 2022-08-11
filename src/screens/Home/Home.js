import React,{useState,useEffect} from "react";
import { Text,View, TouchableOpacity,Image } from 'react-native';
import StyleSheet from '../../assets/css/style'
import {MyContainer} from '../../components/MainComponents';
import {RatingStar} from 'svg'
import BottomNavigationCustom from "../../components/MainComponents/BottomNavigationCustom";

import { useNavigation } from '@react-navigation/native';
import { colors } from "../../constraints";
import { Back } from "../../assets/svg";

const Notification = (props) =>{
    const navigation = useNavigation()
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(true)

const navigate = (value) => {
    navigation.navigate(value)
}
    return(
    <View style={[StyleSheet.whiteBackground]}>
    <View style={StyleSheet.leftPadding}>
        <MyContainer title={"ShopenLive"}/>
    </View>


    <View style={[StyleSheet.line,{marginVertical:20,borderWidth:0}]}/>
    <View style={StyleSheet.leftPadding}>
        <Text style={[StyleSheet.textBold,{marginVertical:10,fontSize:18,fontWeight:"700",color:colors.greyColor}]}>
            Today
        </Text>
        {[0,1,2,3].map((item,index) => (
            <View key={index}>
        <TouchableOpacity  style={[StyleSheet.flexRowSpaceBetween,{borderColor:"#cfcfcf",borderRadius:6,borderWidth:1,padding:4,paddingTop:12,marginBottom:20}]} onPress={() => navigate('Chat')}>
            <View style={{display:"flex",flexDirection:"row"}}>
            <Image source={require('../../assets/images/user.png')} style={StyleSheet.profileImage}/>
            <View style={{paddingTop:14,paddingLeft:10}}>
            <Text style={[StyleSheet.newlabel,{fontWeight:"800"}]}>Anish</Text>

            </View>
            </View>
            <Back style={{
                // rotate: "180deg",
                transform : [{ rotate: "180deg" }],
                marginTop:-10,marginRight:10
            }}/>
        </TouchableOpacity>
        {index == 1 ? 
        <Text style={[StyleSheet.textBold,{marginVertical:10,fontSize:18,fontWeight:"700",color:colors.greyColor}]}>
            22/04/2022
        </Text>:null
        }
            </View>
            ))}
    
   </View>
   <BottomNavigationCustom activeTab1={true}/>

    </View> 
    )
}
export default Notification