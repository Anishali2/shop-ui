

import React,{useState} from "react";
import { Text,View,TextInput, ScrollView} from 'react-native';
import StyleSheet from '../../assets/css/style'
import { colors } from "../../constraints";
import { Mail }  from 'svg'
import MyContainer from "../../components/MainComponents/MyContainer";
import { Eye, Facebook, LoginCart, Password } from "../../assets/svg";
import { LoginButton } from "../../components/MainComponents/LoginButton";
import { Button } from "react-native-paper";
const AddProduct = (props) =>{
    
    const [keyboardStatus, setKeyboardStatus] = useState('true');
 
   
      const onSubmit = () => { 
        props.navigation.navigate("Account")
      }
    


    return(
    <View style={[StyleSheet.whiteBackground]}>  
    <View style={[StyleSheet.leftPadding,{paddingTop:1}]}>

    <MyContainer title="Add Product" />
    </View>

    
 <ScrollView showsVerticalScrollIndicator={false}>


    <View style={[StyleSheet.leftPadding,{paddingTop:0}]}>
    <Text style={StyleSheet.inputLabel}>Name</Text>
    <View style={[StyleSheet.input]}>

        <TextInput
            style={[StyleSheet.inputText,{width:"76%"}]}
            placeholder='Name of Product'
            placeholderTextColor={colors.greyColor}
            color={"black"}
             />

    </View>
    <View style={StyleSheet.flexRowSpaceBetween}>
<View/>
    <View style={[StyleSheet.flexRowSpaceBetween,{width:250,height:180,marginTop:18,borderRadius:10,
        borderWidth:1,
        borderColor:colors.borderColor}]}></View> 
        <View/>

        </View>

        <View style={StyleSheet.flexRowSpaceBetween}>
<View style={{width:100,height:100,marginTop:18,borderRadius:10,borderWidth:1,borderColor:colors.borderColor}}></View>
    <View style={{width:100,height:100,marginTop:18,borderRadius:10,borderWidth:1,borderColor:colors.borderColor}}></View> 
        
<View style={{width:100,height:100,marginTop:18,borderRadius:10,borderWidth:1,borderColor:colors.borderColor}}></View> 
        </View>
        <Text style={StyleSheet.inputLabel}>Price</Text>
    <View style={[StyleSheet.input]}>
        <TextInput
            style={StyleSheet.inputText}
            placeholder='Price'
            placeholderTextColor={colors.greyColor}
            color={"black"}
            />
    </View>
    <Text style={StyleSheet.inputLabel}>Size</Text>
    <View style={[StyleSheet.input]}>

        <TextInput
            style={[StyleSheet.inputText,{width:"76%"}]}
            placeholder='Size'
            placeholderTextColor={colors.greyColor}
            color={"black"}
             />

    </View> 
    <View style={StyleSheet.flexRowSpaceBetween}>

      {["L","M","S","1","0"].map((item,index)=>{
        return(
          <View style={[StyleSheet.flexRowSpaceBetween,{width:50,height:50,marginTop:18,borderRadius:10,borderWidth:1,borderColor:colors.borderColor}]}>
          <Text style={{marginVertical:0,color:"black",marginLeft:19}}>{item}</Text>
          </View>
        )
      }
      )}

        </View>
         <Text style={StyleSheet.inputLabel}>Stock</Text>
    <View style={[StyleSheet.input,{width:"50%"}]}>

        <TextInput
            style={[StyleSheet.inputText]}
            placeholder='Stock'
            placeholderTextColor={colors.greyColor}
            color={"black"}
             />

    </View> 

</View>
    {/**
     *  ___________________
     * |                   |
     * |       Login       | 
     * |___________________|
     *  
    */}
    {
        keyboardStatus == 'true' ? 
        <View style={[StyleSheet.flexEnd,StyleSheet.BottomButtonMargin,StyleSheet.leftPadding]}>
            <LoginButton  text={"Add Product"} righIcon={false} onPress={() => onSubmit()}/>
        </View>
    : null
  }
   
   

  </ScrollView>
    </View> 
    )
}
export default AddProduct