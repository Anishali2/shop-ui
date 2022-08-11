import React,{useState,useEffect} from "react";
import { Text,View, TouchableOpacity,ScrollView } from 'react-native';
import StyleSheet from '../../assets/css/style'
import {MyContainer} from '../../components/MainComponents/';
import {MasterCard,VisaCard} from 'svg'

const UserCards = (props) =>{
    
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(true)


    return(
    <View style={[StyleSheet.whiteBackground]}>  
    <View style={StyleSheet.leftPadding}>
    <Text style={[StyleSheet.signupHeading,{marginTop:20}]}>UserCards</Text>
    </View>


    <View style={[StyleSheet.leftPadding]}>
    <View style={[StyleSheet.line,{marginTop:20,borderColor:"white"}]}/>
    <View style={[StyleSheet.input]}>
    <View style={[StyleSheet.flexRowSpaceBetween,StyleSheet.leftPadding,{marginBottom:30,paddingRight:10}]}>
            <View style={[StyleSheet.flexRow,{paddingTop:25}]}>
                <VisaCard/>
                <Text style={[StyleSheet.newlabel,{marginLeft:10}]}>3739</Text>
            </View>
                <View style={{paddingTop:24}}>
                </View>
        </View>
        </View>
    <View style={[StyleSheet.input]}>
    <View style={[StyleSheet.flexRowSpaceBetween,StyleSheet.leftPadding,{marginBottom:30,paddingRight:10}]}>
            <View style={[StyleSheet.flexRow,{paddingTop:25}]}>
                <MasterCard/>
                <Text style={[StyleSheet.newlabel,{marginLeft:10}]}>3739</Text>
            </View>
                <View style={{paddingTop:24}}>
                </View>
        </View>
        </View>
            </View>

    </View> 
    )
}
export default UserCards