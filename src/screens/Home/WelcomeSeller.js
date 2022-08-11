import React,{useState,useEffect} from "react";
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { Text,View, TouchableOpacity,ScrollView } from 'react-native';
import StyleSheet from '../../assets/css/style'
import {MyContainer} from '../../components/MainComponents/';
import {MyProfile,Payment,Addresses,NotificationsIcon,HelpCircle,InviteFriends} from 'svg'
import BottomNavigationCustom from "../../components/MainComponents/BottomNavigationCustom";
import { useNavigation } from '@react-navigation/native';
import { colors } from "../../constraints";
import { LoginButton, OutlineButton } from "../../components/MainComponents/LoginButton";
import { Arrow, SellerWelcome } from "../../assets/svg";

const WelcomeSeller = (props) =>{
    const navigation = useNavigation()
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(true)

    const navigate = (value) => {
        navigation.navigate(value)
    }

      const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: "#f7f7f7",borderRadius:10, padding: 20};

  const explore = () => {
    navigation.navigate('Account')
  }
    return(

    
    <View style={[StyleSheet.whiteBackground]}>
    <View style={StyleSheet.leftPadding}>
    </View>
    <View style={{marginLeft:-34}}> 
        <SellerWelcome/>
   </View>
   {/* <BottomNavigationCustom /> */}
   <View style={StyleSheet.leftPadding}>


   <Button onPress={() => explore()} labelStyle={{color:"white"}} contentStyle={[StyleSheet.loginButton]} mode="contained" >
   Explore ➞

  </Button>
   </View>
    </View> 
    )
}
export default WelcomeSeller;



