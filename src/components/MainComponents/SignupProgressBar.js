import React from 'react';
import {View} from 'react-native'
import { ProgressBar } from 'react-native-paper';
import { colors,fonts } from '../../constraints'

export const SignupProgressBar = (props) => {
    return(
    <>
    <ProgressBar progress={props.value} color={colors.primaryColor} 
    style={{marginTop:30,borderRadius:8,backgroundColor:colors.borderColor}}/>
    <View style={{marginTop:20}}></View>
    </>
    )
}