
import React,{useState,useEffect} from "react";
import { Text,View, TouchableOpacity,ScrollView,Image } from 'react-native';
import StyleSheet from '../../assets/css/style'
import {MyContainer} from '../../components/MainComponents/';
import {MyProfile,Payment,Addresses,NotificationsIcon,HelpCircle,InviteFriends} from 'svg'
import BottomNavigationCustom from "../../components/MainComponents/BottomNavigationCustom";
import { useNavigation } from '@react-navigation/native';
import { colors } from "../../constraints";

const MessagesList = (props) =>{
    const navigation = useNavigation()
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(true)

const navigate = (value) => {
    navigation.navigate(value)
}
    return(
    <View style={[StyleSheet.whiteBackground]}>
    <View style={StyleSheet.leftPadding}>
        <MyContainer title={"Messages"}/>
    </View>


    <View style={[StyleSheet.line,{marginVertical:20,borderWidth:0}]}/>
    <View style={StyleSheet.leftPadding}>
        {[0,1,2,3].map((item,index) => (
        <TouchableOpacity key={index} style={[StyleSheet.flexRowSpaceBetween,{borderColor:"#cfcfcf",borderRadius:6,borderBottomWidth:1,padding:4,paddingTop:12,marginBottom:20}]} onPress={() => navigate('Chat')}>
            <View style={{display:"flex",flexDirection:"row"}}>
            <Image source={require('../../assets/images/user.png')} style={StyleSheet.profileImage}/>
            <View style={{paddingTop:6,paddingLeft:5}}>
            <Text style={[StyleSheet.newlabel,{fontWeight:"800"}]}>Olivia</Text>
            <Text style={StyleSheet.newlabel}>Okay...</Text>

            </View>
            </View>
            <Text style={{color:"#b7b7b7",marginTop:-10,marginRight:10}}>New</Text>
        </TouchableOpacity>
            ))}
    
   </View>
   <BottomNavigationCustom activeTab4={true}/>

    </View> 
    )
}
export default MessagesList