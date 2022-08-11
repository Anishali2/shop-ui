import React,{useState,useEffect} from "react";
import { Text,View, TouchableOpacity,TextInput,ScrollView,Keyboard } from 'react-native';
import StyleSheet from '../../assets/css/style'
import MyContainer from '../../components/MainComponents/MyContainer';
import { MainButton } from "../../components/MainComponents/MainButton";
import { colors } from "../../constraints";
import { SignupProgressBar } from "../../components/MainComponents/SignupProgressBar";
import { CheckBox } from '../../components/General'

const PhoneVerify = (props) =>{
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [keyboardStatus, setKeyboardStatus] = useState('true');
    
    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus("false");
          });
          const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus("true");
          });
      
          return () => {
            showSubscription.remove();
            hideSubscription.remove();
          };
      }, []);

      const changeStatus = () =>{
          if(toggleCheckBox)
          setToggleCheckBox(false)
          else
          setToggleCheckBox(true)
      }
      
      const onSubmit = () =>{
        props.navigation.navigate("FavouriteFood")
      }

    return(
    <View style={[StyleSheet.whiteBackground,StyleSheet.leftPadding]}>  
    <MyContainer {...props} step='Step 1'/>
    <ScrollView showsVerticalScrollIndicator={false}>
    <SignupProgressBar value={0.25}/>
    <Text style={StyleSheet.signupHeading}>Nice to meet you!</Text>
        <Text style={StyleSheet.signupSubHeading}>Please tell us more about you</Text>
        <View style={StyleSheet.flexRowSpaceBetween}>
            <View style={{width:'48%'}}>
            <Text style={StyleSheet.label}>
             First Name 
            <Text style={{color:'red'}}>*</Text>
            </Text>
           <View style={[StyleSheet.input]}>
            <TextInput
                    style={StyleSheet.inputText}
                    placeholder=''
                    placeholderTextColor={colors.greyColor}
                    onChangeText={e=>setFirstName(e)}
                    value={firstName}
                    keyboardType='text'
                />
            </View>
            </View>

            <View style={{width:'48%'}}>
            <Text style={StyleSheet.label}>Last Name</Text>
           <View style={[StyleSheet.input]}>
            <TextInput
                    style={StyleSheet.inputText}
                    placeholder=''
                    placeholderTextColor={colors.greyColor}
                    onChangeText={e=>setLastName(e)}
                    value={lastName}
                    keyboardType='text'
                />
            </View>
        </View>
      </View>

      <Text style={StyleSheet.label}>Email address</Text>
         <View style={[StyleSheet.input]}>
                <TextInput
                    style={StyleSheet.inputText}
                    placeholderTextColor={colors.greyColor}
                    onChangeText={e=>setEmail(e)}
                    value={email}
                    keyboardType='email'
                />
        </View>

        <View style={StyleSheet.flexRowSpaceBetween}>
        <Text style={StyleSheet.label}>Sign up for promotional emails</Text>
        <View style={{paddingTop:20}}>
         <TouchableOpacity onPress={()=>changeStatus()} >
         <CheckBox checkStatus = {toggleCheckBox}/>
         </TouchableOpacity>
         </View>
        </View>
     
    </ScrollView>
    {
        keyboardStatus == 'true' ? 
        <View style={[StyleSheet.flexEnd,StyleSheet.BottomButtonMargin]}>
            <MainButton  text={"Continue"} righIcon={false} onPress={() => onSubmit()}/>
        </View>
    : null
   }
    </View> 
    )
}
export default PhoneVerify