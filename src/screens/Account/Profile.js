import React,{useState,useEffect} from "react";
import { Text,View, TextInput,ScrollView,TouchableOpacity } from 'react-native';
import {colors} from '../../constraints'
import StyleSheet from '../../assets/css/style'
import {MyContainer,MainButton} from '../../components/MainComponents/';
import { CheckBox } from '../../components/General'
import { Address, Eye, Geography, Mail, Password, Person, Phone } from "../../assets/svg";
import { LoginButton } from "../../components/MainComponents/LoginButton";

const Profile = (props) =>{
    
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(true)
    const [keyboardStatus, setKeyboardStatus] = useState('true');
 

    const changeStatus = () =>{
        if(toggleCheckBox)return setToggleCheckBox(false)
        else return setToggleCheckBox(true)
    }
      const onSubmit = () =>{
        props.navigation.navigate("SignupVerify")
      }

    return(
    <View style={[StyleSheet.whiteBackground]}>  
<ScrollView>
    <View style={StyleSheet.leftPadding}>

    <MyContainer {...props} title={"Create your Profile"} setting={false} />

  <View style={[StyleSheet.flexRowSpaceBetween,{marginVertical:20}]}> 
<Text></Text>
       <View style={{width:180,height:180,borderRadius:300,
        borderWidth:1,
        borderColor:colors.borderColor}}></View> 
<Text></Text>
  </View>
    <View style={StyleSheet.flexRowSpaceBetween}>
            <View style={{width:'48%'}}>
            <Text style={StyleSheet.inputLabel}>
            Frist Name 
            </Text>
           <View style={[StyleSheet.input]}>
             <TextInput
                    style={StyleSheet.inputText}
                    placeholder='First Name'
                    placeholderTextColor={colors.greyColor}
                    
                    />
            </View>
            </View>

            <View style={{width:'48%'}}>
            <Text style={StyleSheet.inputLabel}>Last Name</Text>
           <View style={[StyleSheet.input]}>
            {/* <Person></Person> */}
            <TextInput
                    style={StyleSheet.inputText}
                    placeholder='Last Name'
                    placeholderTextColor={colors.greyColor}
                    
                    />
            </View>
        </View>
      </View>

      <Text style={StyleSheet.inputLabel}>Email</Text>
      <View style={[StyleSheet.input]}>
      <Mail style={{marginLeft:14}} />
        <TextInput
            style={StyleSheet.inputText}
            placeholder='Email'
            placeholderTextColor={colors.greyColor}
            color={"black"}
            />
    </View>
    <Text style={StyleSheet.inputLabel}>Password</Text>
    <View style={[StyleSheet.input]}>

      <Password style={{marginLeft:14}} />
        <TextInput
            style={[StyleSheet.inputText,{width:"76%"}]}
            placeholder='********'
            placeholderTextColor={colors.greyColor}
            color={"black"}
             secureTextEntry={true}
            />

      <Eye />
    </View>
        <Text style={StyleSheet.inputLabel}>Country</Text>
      <View style={[StyleSheet.input]}>
      <Geography style={{marginLeft:14}} />
        <TextInput
            style={StyleSheet.inputText}
            placeholder='Country'
            placeholderTextColor={colors.greyColor}
            color={"black"}
            />
    </View>
    <Text style={StyleSheet.inputLabel}>Address</Text>
      <View style={[StyleSheet.input]}>
      <Address style={{marginLeft:14}} />
        <TextInput
            style={StyleSheet.inputText}
            placeholder='Address'
            placeholderTextColor={colors.greyColor}
            color={"black"}
            />
    </View>

    <Text style={StyleSheet.inputLabel}>Phone</Text>
      <View style={[StyleSheet.input]}>
      <Phone style={{marginLeft:14}} />
        <TextInput
            style={StyleSheet.inputText}
            placeholder='Phone'
            placeholderTextColor={colors.greyColor}
            color={"black"}
            />
    </View>


       
    </View>
<View style={{marginTop:10}}></View>
        {
          keyboardStatus == 'true' ? 
          <View style={[StyleSheet.flexEnd,StyleSheet.BottomButtonMargin,StyleSheet.leftPadding]}>
            <LoginButton  text={"Save Changes"} onPress={() => onSubmit()}/>
        </View>
    : null
  }
  </ScrollView>

    </View> 
    )
}
export default Profile
