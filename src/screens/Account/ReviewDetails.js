import React,{useState,useEffect} from "react";
import { Text,View, TouchableOpacity,ScrollView,Image } from 'react-native';
import StyleSheet from '../../assets/css/style'
import {MyContainer} from '../../components/MainComponents/';
import { useNavigation } from '@react-navigation/native';
import { Back, Star } from "../../assets/svg";

const ReviewDetails = (props) =>{
    const navigation = useNavigation()

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
        <TouchableOpacity  style={[StyleSheet.flexRowSpaceBetween,{padding:4,paddingTop:12,marginBottom:20}]} onPress={() => navigate('Chat')}>
            <View style={{display:"flex",flexDirection:"row"}}>
            <View style={{borderColor:"#cfcfcf",borderRadius:6,borderWidth:1,width:100,height:100}}/>
            <View style={{paddingTop:14,paddingLeft:10}}>

            <Text>Olivia</Text>
                <View style={[StyleSheet.flexRow,{display:"flex"}]}>
                    {[0,1,2,3,4].map((item,index) => (
                        <>
                <Star/>
               { index == 4 ? <Text style={{color:"black",paddingTop:4}}>{"(5)"}</Text>:null}
                        </>
                    ))}
                </View>
            <Text style={[StyleSheet.newlabel,{paddingTop:8}]}>2 Reviews</Text>
            </View>
            </View>

        </TouchableOpacity>
            <View style={[StyleSheet.line,{marginVertical:20,}]}/>
            <View style={{borderColor:"#cfcfcf",borderRadius:20,borderWidth:1,width:"100%",height:"auto"}}>
            <TouchableOpacity >

            <View  style={{display:"flex",padding:20,flexDirection:"row"}} >

            <Image source={require('../../assets/images/user.png')} style={StyleSheet.profileImage}/>
            <View>

            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"60%"}}>
            <Text style={[StyleSheet.newlabel,{fontWeight:"800"}]}>Olivia</Text>
            <Text style={{color:"black"}}>{"(5)"}</Text>
            </View>
     
            <Text style={[StyleSheet.newlabel,{paddingTop:8,fontSize:10,width:"60%"}]}>Nice product, come back for more shopping come back for more shopping</Text>
            </View>

            </View>
                        <View style={[StyleSheet.line,{marginVertical:20,width:"80%",marginLeft:30}]}/>
            
                        <View  style={{display:"flex",padding:20,flexDirection:"row"}} >

            <Image source={require('../../assets/images/user.png')} style={StyleSheet.profileImage}/>
            <View>

            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"60%"}}>
            <Text style={[StyleSheet.newlabel,{fontWeight:"800"}]}>Olivia</Text>
            <Text style={{color:"black"}}>{"(5)"}</Text>
            </View>

            <Text style={[StyleSheet.newlabel,{paddingTop:8,fontSize:10,width:"60%"}]}>Nice product, come back for more shopping come back for more shopping</Text>
            </View>

            </View>
        </TouchableOpacity>
        
            </View>
   </View>

    </View> 
    )
}
export default ReviewDetails