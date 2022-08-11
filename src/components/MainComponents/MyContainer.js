import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Platform, Linking, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { colors, images, icons, fonts } from '../../constraints';
import { MyStatusBar, Loader, NotFound } from '../General';
// import MainHeader from './MainHeader';
import  StyleSheet  from '../../assets/css/style'
import { SignupHeader } from './SignupHeader';
import { Arrow } from '../../assets/svg';
import { useNavigation,CommonActions } from '@react-navigation/native';
import { StackActions } from "react-navigation";
const MyContainer = (props) => {
    useEffect(() => {
}, [])

    const navigation = useNavigation();
   
    const goBackNavigation = () => {
        navigation.dispatch(CommonActions.goBack());
    }

    
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 10 : 1;
    const keyboardBehaivior = Platform.OS === 'ios' ? 'padding' : '';
    return (
        <KeyboardAvoidingView behavior={keyboardBehaivior} keyboardVerticalOffset={keyboardVerticalOffset}>
                <Loader
                  loader={props.loader}
                />
                {Platform.OS === 'ios' ?
                    <MyStatusBar
                        translucent={true}
                        color={'transparent'}
                        barStyle={'dark-content'}
                    />
                    :
                    <MyStatusBar
                        color={'white'}
                        barStyle={'dark-content'}
                    />
                }

                <View style={[StyleSheet.flexRowSpaceBetween,{marginTop:45}]}>
                       <TouchableOpacity  style={{fontSize:20}} >

                {/* <Arrow  /> */}
                <Text onPress={() => goBackNavigation()} style={{color:"black"}}><Arrow/></Text>
                    </TouchableOpacity>
                <Text style={[StyleSheet.blackBold,{fontSize:18,color:"#979797"}]}>{props.title}</Text>
                <View style={{
                    // transparent 
                }}>

                <Text>        </Text>                    
                </View>
                </View>
        </KeyboardAvoidingView>
    );
}

export default MyContainer
