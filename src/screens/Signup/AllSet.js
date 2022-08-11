import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import StyleSheet from '../../assets/css/style'
import { DownArrow,IntroImg }  from 'svg';
import { MainButton } from "../../components/MainComponents/MainButton";
import { fonts } from "../../constraints";
const AllSet = (props)  => {

  const [code,setCode]=useState('')
  
  const  onSubmit = () => {
    props.navigation.navigate("Home")
  }

  const countryselector = () => {
    setCode(1)
  }
     return (
      <>
        <StatusBar hidden={true}/>
        <View
          style={{width:'100%',height:'100%',backgroundColor:"#ffaba5",paddingTop:20}}>
          <ScrollView showsVerticalScrollIndicator={false} style={{height:'100%'}}>
          <View style={{width:'90%',marginLeft:'5%',marginTop:40}}>            
            <Text style={StyleSheet.textCenter}>
              All Set!
            </Text>
            <Text style={StyleSheet.centerHeader}>
              Welcome to CHOP! Your New and improved
            </Text>
           
          </View>
            <IntroImg/>
        
          </ScrollView>
          <View style={StyleSheet.positionFixed}>
            <View style={{ marginTop: 15 }}></View>
            <MainButton text={"Next"} onPress={() => onSubmit()} />
            <View style={{ marginTop: 10 }}></View>
          </View>
        </View>
      </>
    );
  }


  export default AllSet