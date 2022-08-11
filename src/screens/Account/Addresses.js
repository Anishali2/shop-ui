import React,{useState,useEffect} from "react";
import { Text,View, TouchableOpacity,TextInput } from 'react-native';
import StyleSheet from '../../assets/css/style'
import {MyContainer,BottomNavigationCustom,OutlineButton} from '../../components/MainComponents/';
import {RatingStar} from 'svg'
import { colors } from "../../constraints";
const Addresses = (props) =>{
    
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(true)


    return(
    <View style={[StyleSheet.whiteBackground]}>  
    <View style={StyleSheet.leftPadding}>
    <Text style={[StyleSheet.signupHeading,{marginTop:49}]}>Addresses</Text>
    </View>


    <View style={[StyleSheet.line,{marginTop:20,borderWidth:0}]}/>
    <View style={StyleSheet.leftPadding}>

    <View style={[StyleSheet.input,{height:'auto'}]}>
        <View style={[StyleSheet.flexRowSpaceBetween,StyleSheet.leftPadding,{marginBottom:30}]}>
            <View style={StyleSheet.flexColumn}>
                <Text style={[StyleSheet.label,{marginTop:10}]}>18th Avenue</Text>
                <Text style={[StyleSheet.newlabel]}>18th Ave, Brooklyn, NY</Text>

            </View>

        </View>
        <View style={[StyleSheet.line]}/>

                  <TextInput
                    style={StyleSheet.inputText}
                    placeholder='Tap to add detail & delivery instructions'
                    placeholderTextColor={colors.greyColor}
                    color={"black"}
                    />
    </View>
    <View style={{marginTop:10}}>
        <OutlineButton border={true} text={'Add new address'} />
    </View>

    </View>

    </View> 
    )
}
export default Addresses
