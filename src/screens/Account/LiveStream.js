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
import { Back } from "../../assets/svg";

const LiveStream = (props) =>{
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

  const logoutUser = () => {
    hideModal();
    navigation.navigate('UserSelection')
  }
    return(
        <>

    <View style={[StyleSheet.whiteBackground]}>
    <View style={StyleSheet.leftPadding}>
    </View>
   

  <Text style={[StyleSheet.textCenter,{fontWeight:"700",marginBottom:15}]}>Faz Sam</Text>
  <View onPress={() => navigate("Followers")}>

    

   </View>
   <BottomNavigationCustom activeTab3={true}/>

    </View> 
    </>
    )
}
export default LiveStream
