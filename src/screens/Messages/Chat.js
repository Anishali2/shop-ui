import React from 'react'
import {
  View,
  ScrollView,
  Text, TextInput,Image
} from "react-native";
import StyleSheet from "../../assets/css/style";

import { useNavigation } from '@react-navigation/native';
import {MapWhite,PhoneWhite} from 'svg'
import { colors } from '../../constraints';
import style from '../../assets/css/style';
import { MiniMainButton, MyContainer } from '../../components/MainComponents';

function Chat({ ...props }) {
  const navigation = useNavigation();
  return (
    <>

      <View style={[ { backgroundColor: "#fff",marginTop:0,height:'100%' }]}>
        <View style={StyleSheet.leftPadding}>

        <MyContainer {...props} step=''  setting={'help'} drawer={"true"} />
        </View>

        
        <View style={style.leftPadding}>
        <ScrollView  style={{height:'50%'}}>
          <View style={{display:"flex",flexDirection:"row"}}>

        <View style={{width:'auto',backgroundColor:'#f4f4f4',padding:12,borderRadius:30,marginTop:10,maxWidth:'70%'}}>
          <Text style={{color:colors.headingColor}}>Do you need some extra chilli?</Text>
        </View>
          </View>
        <Text style={[StyleSheet.newlabel,{marginTop:12,color:colors.greyColor}]}>10:15am</Text>

        <View style={{width:'auto',borderColor:'#f4f4f4',borderWidth:1,padding:12,borderRadius:30,marginTop:10,marginLeft:'auto'
         ,maxWidth:'55%',backgroundColor:colors.primaryColor}}>
          <Text style={{color:colors.headingColor}}>Yes, please. Thank you</Text>
        </View>
        <Text style={[StyleSheet.newlabel,{marginTop:12,marginLeft:'auto',color:colors.greyColor}]}>10:15am</Text>

        </ScrollView>
        
        </View>
      </View>

        <View style={{marginTop:'auto',backgroundColor:"white",height:"10%"}}>
          <View style={[StyleSheet.horiBorder]}/>
          <View style={[StyleSheet.leftPadding,StyleSheet.flexRowSpaceBetween]}>
            <TextInput
              placeholder='Type your reply here'
              placeholderTextColor={"grey"}
              style={{backgroundColor:'#c4c4c461',borderRadius:10,padding:12,width:'70%',color:"black"}}
              />
              <MiniMainButton  
                text={"SEND"} color={colors.whiteColor}
                bg={colors.primaryColor} radius={8} 
                width={80} height={35}
                padding={0} margin={1}
            />
          </View>
        </View>

    </>
  )
}

export default Chat