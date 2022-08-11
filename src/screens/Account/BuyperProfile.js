import React,{useState,useEffect} from "react";
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { Text,View, TouchableOpacity,ScrollView,Image } from 'react-native';
import StyleSheet from '../../assets/css/style'
import {MyContainer} from '../../components/MainComponents/';
import {MyProfile,Payment,Addresses,NotificationsIcon,HelpCircle,InviteFriends} from 'svg'
import BottomNavigationCustom from "../../components/MainComponents/BottomNavigationCustom";
import { useNavigation } from '@react-navigation/native';
import { colors } from "../../constraints";
import { LoginButton, OutlineButton } from "../../components/MainComponents/LoginButton";
import { Back, Block, Message } from "../../assets/svg";

const BuyerProfile = (props) =>{
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
        <Provider>
<Portal>
<Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
<Text style={[StyleSheet.textCenter,{fontSize:22,fontWeight:'700',marginBottom:20}]}>Are you sure you want to <Text style={{color:colors.primaryColor}}>Logout.</Text></Text>

    <OutlineButton onPress={showModal} text={"No"} type="short"/>
    <View style={{marginTop:10}}/>
    <LoginButton onPress={logoutUser} text={"Yes"} type="short"/>
            </Modal>
    </Portal>
    <View style={[StyleSheet.whiteBackground]}>
    <View style={StyleSheet.leftPadding}>
        <MyContainer title={"Buyer Profile View"}/>
    </View>
    <View style={[StyleSheet.flexRowSpaceBetween,{justifyContent:"space-around",marginTop:20}]}> 
    <View>

    <Message style={{marginTop:-50}} onPress={() => navigate("Chat")}/>
     <Text style={[StyleSheet.textCenter,{fontSize:10,marginBottom:15}]}>Message</Text>
    </View>
       <View style={{width:180,height:180,borderRadius:300,
        borderWidth:1,
        borderColor:colors.borderColor}}/>
<View>

<Block style={{marginTop:-50}}/>
 <Text style={[StyleSheet.textCenter,{fontSize:10,marginBottom:15}]}>Block</Text>
</View>
  </View>

  <Text style={[StyleSheet.textCenter,{fontWeight:"700"}]}>Faz Sam</Text>
  <Text style={[StyleSheet.textCenter,{fontSize:10,marginBottom:15}]}>Big Sales | Big Dreams</Text>
  <View onPress={() => navigate("Followers")}>
    <View>
      <Text onPress={() => navigate("Followers")} style={[StyleSheet.textCenter,{fontWeight:"700",color:colors.primaryColor}]}>250</Text>
      <Text style={[StyleSheet.textCenter,{}]}>Following</Text>
    </View>
    
  </View>
    <View style={[StyleSheet.line,{marginVertical:20,borderWidth:0}]}/>
    <View style={StyleSheet.leftPadding}>
   
        <View style={[StyleSheet.flexRowCenter,{margin:10,minWidth:300}]}>

     <LoginButton onPress={showModal} text={"  Reviews  "} type="short"/>
     <View/>
        </View>
        <Text style={[StyleSheet.newlabel,{paddingTop:8,fontSize:14,width:"60%"}]}>Bio</Text>

            <View style={{borderColor:"#cfcfcf",borderRadius:20,borderWidth:1,width:"100%",height:"auto"}}>
            <TouchableOpacity >

            <View  style={{display:"flex",padding:20,flexDirection:"row"}} >

            <View>

           
     
            <Text style={[StyleSheet.newlabel,{fontSize:14,width:"60%",color:colors.greyColor}]}>Nice product, come back for more shopping come back for more shopping</Text>
            </View>

            </View>

        </TouchableOpacity>
        
            </View>
            </View>
   
   <BottomNavigationCustom activeTab5={true}/>

    </View> 
    </Provider>
    )
}
export default BuyerProfile



