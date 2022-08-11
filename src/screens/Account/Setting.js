import React from "react";
import { Text,View, TouchableOpacity } from 'react-native';
import StyleSheet from '../../assets/css/style'
import {MyContainer} from '../../components/MainComponents/';
import {Payment} from 'svg'
import BottomNavigationCustom from "../../components/MainComponents/BottomNavigationCustom";
import { useNavigation } from '@react-navigation/native';
import { colors } from "../../constraints";
import { Back } from "../../assets/svg";
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const Setting = (props) =>{
    const navigation = useNavigation()
    const [visible, setVisible] = React.useState(true);

    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);
  
    const navigate = (value) => {
        navigation.navigate(value)
    }


  const hideModal = () => setVisible(false);

  const logoutUser = () => {
      hideModal();
    navigation.navigate('UserSelection')
  }
    return(
        <>
        <Provider>

    <View style={[StyleSheet.whiteBackground]}>
    <View style={StyleSheet.leftPadding}>
        <MyContainer title={"Setting"}/>
    </View>


  
    <View style={[StyleSheet.line,{marginVertical:20,borderWidth:0}]}/>
    <View style={StyleSheet.leftPadding}>
        <View style={StyleSheet.flexRowSpaceBetween} >
            <Text style={StyleSheet.newlabel}>Currency</Text>
            <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<TouchableOpacity onPress={openMenu} style={{borderWidth:1,borderColor:colors.borderColor,borderRadius:12,padding:5}}><Text><Payment/>Show menu</Text></TouchableOpacity>}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
        </View>
    <View style={[StyleSheet.line,{marginVertical:20,}]}/>
     <TouchableOpacity style={StyleSheet.flexRowSpaceBetween} onPress={() => navigate('Account')}>
            <Text style={StyleSheet.newlabel}>Subscription</Text>
             <Back style={{
                transform : [{ rotate: "180deg" }],
               marginRight:10
            }}/> 
        </TouchableOpacity>
    <View style={[StyleSheet.line,{marginVertical:20,}]}/>
    <TouchableOpacity style={StyleSheet.flexRowSpaceBetween} onPress={() => navigate('Account')}>
            <Text style={StyleSheet.newlabel}>Contract</Text>
            <Back style={{
                transform : [{ rotate: "180deg" }],
               marginRight:10
            }}/> 
        </TouchableOpacity>
    <View style={[StyleSheet.line,{marginVertical:20,}]}/>
    <TouchableOpacity style={StyleSheet.flexRowSpaceBetween} onPress={() => navigate('Account')}>
            <Text style={StyleSheet.newlabel}>Language</Text>
            
            </TouchableOpacity>
     
   </View>
   <BottomNavigationCustom activeTab5={true}/>

    </View> 
    </Provider>
    </>
    )
}
export default Setting


