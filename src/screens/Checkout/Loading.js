import React,{useState,useEffect} from "react";
import { Text,View, TextInput,ScrollView,TouchableOpacity } from 'react-native';
import {colors} from '../../constraints'
import StyleSheet from '../../assets/css/style'
import {MyContainer,MainButton} from '../../components/MainComponents/';
import {ArrowRight} from 'svg'
import BottomNavigationCustom from "../../components/MainComponents/BottomNavigationCustom";
const Loading = (props) =>{
    
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(true)
    const [keyboardStatus, setKeyboardStatus] = useState('true');

      const onSubmit = () =>{
        props.navigation.navigate("FavouriteFood")
      }

    return(
    <View style={[StyleSheet.whiteBackground]}>  
<View style={StyleSheet.leftPadding}>

    <MyContainer {...props} step='' drawer={"cross"} />
    <View style={StyleSheet.MyContainer}>

    <Text style={StyleSheet.signupHeading}>Loading</Text>
    </View>
</View>
 
    
        {
        keyboardStatus == 'true' ? 
        <View style={[StyleSheet.flexEnd,StyleSheet.BottomButtonMargin,StyleSheet.leftPadding,{position:"absolute",bottom:30}]}>
            <MainButton  text={"Save"} righIcon={false} onPress={() => onSubmit()}/>
        </View>
    : null
   }

    </View> 
    )
}
export default Loading
