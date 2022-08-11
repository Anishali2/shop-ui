import React,{useState,useEffect} from "react";
import { Text,View, TextInput,ScrollView,TouchableOpacity } from 'react-native';
import {colors} from '../../constraints'
import StyleSheet from '../../assets/css/style'
import {MyContainer,MainButton} from '../../components/MainComponents/';
import {ArrowRight} from 'svg'
import BottomNavigationCustom from "../../components/MainComponents/BottomNavigationCustom";

const AddNewCard = (props) =>{
    

    const [keyboardStatus, setKeyboardStatus] = useState('true');
 

      const onSubmit = () =>{
        props.navigation.navigate("Loading")
      }

    return(
    <View style={[StyleSheet.whiteBackground]}>  
    <View style={StyleSheet.leftPadding}>

    <MyContainer {...props} step='' drawer={"cross"} />
    <Text style={StyleSheet.signupHeading}>Add new card</Text>

    <Text style={StyleSheet.label}>Card number</Text>
         <View style={[StyleSheet.input]}>
                <TextInput
                    style={StyleSheet.inputText}
                    placeholderTextColor={colors.greyColor}
                />
        </View>
    <View style={StyleSheet.flexRowSpaceBetween}>
            <View style={{width:'48%'}}>
            <Text style={StyleSheet.label}>
            Expiry date 
            </Text>
           <View style={[StyleSheet.input]}>
            <TextInput
                    style={StyleSheet.inputText}
                    placeholder='MM/YY'
                    placeholderTextColor={colors.greyColor}
                    
                    />
            </View>
            </View>

            <View style={{width:'48%'}}>
            <Text style={StyleSheet.label}>Cvv</Text>
           <View style={[StyleSheet.input]}>
            <TextInput
                    style={StyleSheet.inputText}
                    placeholder=''
                    placeholderTextColor={colors.greyColor}

                    />
            </View>
        </View>
      </View>
      <Text style={StyleSheet.label}>Cardholder name</Text>
         <View style={[StyleSheet.input]}>
                <TextInput
                    style={StyleSheet.inputText}
                    placeholderTextColor={colors.greyColor}
                />
        </View>
    </View>
        {
        keyboardStatus == 'true' ? 
        <View style={[StyleSheet.flexEnd,StyleSheet.BottomButtonMargin,StyleSheet.leftPadding,{position:"absolute",bottom:30}]}>
            <MainButton  text={"Save"} righIcon={false} onPress={() => onSubmit()}/>
        </View>
    : null
   }
    <BottomNavigationCustom activeTab3={true}/>

    </View> 
    )
}
export default AddNewCard
