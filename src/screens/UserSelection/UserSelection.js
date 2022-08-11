import React from "react";
import { StatusBar, Text,View } from 'react-native';
import StyleSheet from '../../assets/css/style'
import { Bucket  } from "../../assets/svg";
import { OutlineButton } from "../../components/MainComponents/LoginButton";
const UserSelection = (props) =>{

    return(
      <View style={StyleSheet.splashScreen}>
      <StatusBar  translucent={true} hidden={false} backgroundColor={"transparent"}/>
       <Bucket />
       <Text style={[StyleSheet.blackBold,{textAlign:"center",fontSize:30,paddingVertical:20}]}>Select Your Role</Text>
       <OutlineButton text={"Buyer"} onPress={() => props.navigation.navigate("BuyerLogin")}/>
       <View style={{margin:20}}/>
       <OutlineButton text={"Seller"} onPress={() => props.navigation.navigate("SellerLogin")}/>
  </View>
    )
}
export default UserSelection
