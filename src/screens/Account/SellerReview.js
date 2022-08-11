import React,{useState,useEffect} from "react";
import { Text,View, TouchableOpacity,ScrollView,Image } from 'react-native';
import StyleSheet from '../../assets/css/style'
import {MyContainer} from '../../components/MainComponents/';
import { useNavigation } from '@react-navigation/native';
import { Back, Star } from "../../assets/svg";

const SellerReview = (props) =>{
    const navigation = useNavigation()
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(true)

const navigate = (value) => {
    navigation.navigate(value)
}
    return(
    <View style={[StyleSheet.whiteBackground]}>
    <View style={StyleSheet.leftPadding}>
        <MyContainer title={"Reviews"}/>
    </View>


    <View style={[StyleSheet.line,{marginVertical:20,borderWidth:0}]}/>
    <View style={StyleSheet.leftPadding}>
    {[0,3].map((item,index) => (
            <View key={index}>
        <TouchableOpacity  style={[StyleSheet.flexRowSpaceBetween,{padding:4,paddingTop:12,marginBottom:20}]} onPress={() => navigate('ReviewDetails')}>
            <View style={{display:"flex",flexDirection:"row"}}>
            <View style={{borderColor:"#cfcfcf",borderRadius:6,borderWidth:1,width:100,height:100}}/>
            <View style={{paddingTop:14,paddingLeft:10}}>

            <Text style={[StyleSheet.newlabel,{fontWeight:"800"}]}>Olivia</Text>
                <View key={index} style={[StyleSheet.flexRow,{display:"flex"}]}>
                    {[0,1,2,3,4].map((item,index) => (
                        
                <Star/>
                    ))}
                </View>
            <Text style={[StyleSheet.newlabel,{paddingTop:8}]}>2 Reviews</Text>
            </View>
            </View>
            <Back style={{
                transform : [{ rotate: "180deg" }],
                marginTop:-10,marginRight:10
            }}/>
        </TouchableOpacity>
            </View>
            ))}
   </View>

    </View> 
    )
}
export default SellerReview