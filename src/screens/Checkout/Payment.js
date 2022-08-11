import React,{useState,useEffect} from "react";
import { Text,View, TouchableOpacity,FlatList ,Image,Pressable,TextInput,ScrollView} from 'react-native';
import StyleSheet from '../../assets/css/style'
import { colors, fonts } from "../../constraints";
import { CheckBox } from '../../components/General'
import { Mail,Plus }  from 'svg'
import { MainButton } from "../../components/MainComponents/MainButton"
import MyContainer from "../../components/MainComponents/MyContainer";
import {MiniMainButton} from "../../components/MainComponents/MiniMainButton"
import { Card, Eye, Facebook, Google, LoginCart, Password } from "../../assets/svg";
import { LoginButton } from "../../components/MainComponents/LoginButton";
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "react-native-paper";
const Payment = (props) =>{
    
    const [keyboardStatus, setKeyboardStatus] = useState('true');
      const onSubmit = () => { 
        props.navigation.navigate("WelcomeSeller")
      }
    return(
    <View style={[StyleSheet.whiteBackground]}>  
    <View style={[StyleSheet.leftPadding,{paddingTop:1}]}>

    <MyContainer {...props} title={"Confirm Payment"} />
    </View>

    


    <View style={[StyleSheet.leftPadding,{paddingTop:0}]}>
            <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:50}}>

            <Card>

            </Card>
            </View>
    <Text style={StyleSheet.inputLabel}>Card Number</Text>
    <View style={[StyleSheet.input]}>
        <TextInput
            style={StyleSheet.inputText}
            placeholder='**** **** **** ****'
            placeholderTextColor={colors.greyColor}
            color={"black"}
            />
    </View>

  <View style={StyleSheet.flexRowSpaceBetween}>
            <View style={{width:'58%'}}>
            <Text style={StyleSheet.inputLabel}>
            Expiray Date 
            </Text>
           <View style={[StyleSheet.input]}>
             <TextInput
                    style={StyleSheet.inputText}
                    placeholder='MM/YY'
                    placeholderTextColor={colors.greyColor}
                    
                    />
            </View>
            </View>

            <View style={{width:'38%'}}>
            <Text style={StyleSheet.inputLabel}>CVV</Text>
           <View style={[StyleSheet.input]}>
            {/* <Person></Person> */}
            <TextInput
                    style={StyleSheet.inputText}
                    placeholder='CVV'
                    placeholderTextColor={colors.greyColor}
                    
                    />
            </View>
        </View>
      </View>


    <Text style={StyleSheet.inputLabel}>Card Holder Name</Text>
    <View style={[StyleSheet.input]}>

        <TextInput
            style={[StyleSheet.inputText,{width:"76%"}]}
            placeholder='John Doe'
            placeholderTextColor={colors.greyColor}
            color={"black"}
             secureTextEntry={true}
            />

    </View>

</View>
 <View style={[StyleSheet.flexRowSpaceBetween,StyleSheet.leftPadding,{marginVertical:10}]}>
    <Text style={StyleSheet.inputLabel}>Total</Text>
    <Text style={StyleSheet.inputLabel}>$29.9</Text>
 </View>
    {
        keyboardStatus == 'true' ? 
        <View style={[StyleSheet.flexEnd,StyleSheet.BottomButtonMargin,StyleSheet.leftPadding]}>
            <LoginButton  text={"Confirm Payment"} righIcon={false} onPress={() => onSubmit()}/>
        </View>
    : null
   }
   
 
    </View> 
    )
}
export default Payment
