import React from 'react';
import { Text, TouchableOpacity, Image, View, TextInput, StatusBar, ActivityIndicator, Platform } from 'react-native';
import { colors, images, icons, fonts, constant } from '../constraints';
import Toast from 'react-native-simple-toast';
import { Tick } from 'svg'
import  StyleSheet from '../assets/css/style'
export const MyStatusBar = (props) => {
  return (
    <StatusBar
      hidden={false}
      backgroundColor={props.color}
      barStyle={props.barStyle}
      translucent={true}
    />
  );
}

export const Loader = (props) => {
  return (
    <View>
      {/* <Modal
        animationType="slide"
        transparent={true}
        deviceWidth={1}
        visible={props.loader}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.1)', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 300, height: 300 }}>
              <LottieView source={require('../json/LoaderJsonM.json')} autoPlay loop />
            </View>
        </View>
      </Modal> */}
    </View>
  );
}

export const ImageLoader = (props) => {
  return (

    <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size='large' color={colors.secondayColor} />
    </View>
  );
}

export const showToast = (message) => {
  Toast.show(message, Toast.LONG);
}



export const CheckBox = (props) => {
  console.log(props.checkStatus)
  return (
    <View style={props.checkStatus == false ? StyleSheet.checkboxView : StyleSheet.checkboxViewActive}>
      {props.checkStatus == true ?
       <Tick></Tick>
        :
        <Tick></Tick>

      }
    </View>
  );
}

export const CheckBoxWithText = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
      <View style={{ width: 24, height: 24, borderRadius: 50, backgroundColor: '#F5F5F5', marginRight: 5, justifyContent: 'center', alignItems: 'center' }}>
        {props.status == true ?
          <Image
            source={icons.checkMark}
            style={{ width: 10, height: 12, tintColor: colors.secondaryColor }}
          />
          :
          null
        }
      </View>
      <Text style={{ marginLeft: 5, fontFamily: fonts.SemiBold }}>{props.text}</Text>
    </TouchableOpacity>
  );
}
