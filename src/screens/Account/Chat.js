import React from 'react'
import {
  View,
  ScrollView,
  Text, TextInput
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

        <View style={[StyleSheet.calender, StyleSheet.flexRow, { height: 120}]}>
          <View style={[{ width: '98%'}]}>
            <Text style={[StyleSheet.blackBold, { color: colors.white, fontSize: 11 }]}>Customer Details</Text>
            <View style={[StyleSheet.flexRowSpaceBetween]}>
              <Text style={[StyleSheet.blackBold, { color: colors.white, fontSize: 18,paddingTop:2 }]}>Julian Marshall</Text>
              <View style={[StyleSheet.flexRow]}>
                <MapWhite />
                <Text>    </Text>
                <PhoneWhite />
              </View>
            </View>
            <Text style={[StyleSheet.blackBold, { color: colors.white, fontSize: 11, paddingTop: 3 }]}>Order#18654</Text>
            <Text style={[StyleSheet.listView, { fontSize: 12, color: colors.white,marginTop:-9 }]}>1st Avenue, G.I. Inyass Plaza, Gwarinpa</Text>
          </View>
        </View>
        <View style={style.leftPadding}>
        <ScrollView  style={{height:'50%'}}>
        <View style={{width:'auto',backgroundColor:'#f4f4f4',padding:12,borderRadius:30,marginTop:10,maxWidth:'70%'}}>
          <Text style={{color:colors.headingColor}}>Do you need some extra chilli?</Text>
        </View>
        <Text style={[StyleSheet.newlabel,{marginTop:12,color:colors.greyColor}]}>10:15am</Text>

        <View style={{width:'auto',borderColor:'#f4f4f4',borderWidth:1,padding:12,borderRadius:30,marginTop:10,marginLeft:'auto'
         ,maxWidth:'55%'}}>
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
              placeholderTextColor={colors.borderColor}
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