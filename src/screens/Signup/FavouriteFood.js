import React,{useState,useEffect} from "react";
import { Text,View, TouchableOpacity,ScrollView,FlatList,Image,ImageBackground } from 'react-native';
import StyleSheet from '../../assets/css/style'
import MyContainer from '../../components/MainComponents/MyContainer';
import { MainButton } from "../../components/MainComponents/MainButton";
import { images } from "../../constraints";
import { SignupProgressBar } from "../../components/MainComponents/SignupProgressBar";

let countData=1
 export const FavouriteFood = (props) => {

    const [Foods,setFoods] = useState([])
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [selected,SetSelected] = useState([])

    useEffect(()=>{
        let data=[{name:'Asian',svgName:require('../../assets/images/Food/Asian.png'),checked:true},
                  {name:'Burger',svgName:require('../../assets/images/Food/Burger.png'),checked:false},
                  {name:'Healthy Food',svgName:require('../../assets/images/Food/HealthyFood.png'),checked:false},
                  {name:'Pizza',svgName:require('../../assets/images/Food/Pizza.png'),checked:false},
                  {name:'Ramen',svgName:require('../../assets/images/Food/Ramen.png'),checked:false},
                  {name:'Chicken',svgName:require('../../assets/images/Food/Chicken.png'),checked:false},
                 ]
        setFoods(data)
        SetSelected(1)
    },[])

    const checkFood = async (name,index,check) => {
        Foods[index].checked = !check
        const copy = [...Foods]
        setFoods(copy)
        countData = parseInt(countData) +1
       await SetSelected(countData)
        console.log(selected.length)
    }

    const onSubmit = () =>{
        props.navigation.navigate('SearchLocation')
    }
  
    return(
    <View style={[StyleSheet.whiteBackground,StyleSheet.leftPadding]}>  
    <MyContainer {...props} step='Step 2'/>
    <ScrollView showsVerticalScrollIndicator={false}>
    <SignupProgressBar value={0.5}/>
    <Text style={StyleSheet.signupHeading}>What’s your favorite food?</Text>
        <Text style={StyleSheet.signupSubHeading}>This will help us give you recommendation</Text>
        <View style={{marginTop:20}}></View>
        
        <FlatList 
           data = {Foods}
           horizontal = {false}
           numColumns={2}
           extraData = {Foods}
           renderItem = {({item,index})=>(
               <View style={{width:'46%',marginHorizontal:'2%',marginTop:10}}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>checkFood(item.name,index,item.checked)}>
                <ImageBackground source = {item.svgName} 
                style={{width:'100%',height:150}} 
                imageStyle={{ borderRadius: 8}}
                >
                {
                item.checked == true ? 
                <View style={StyleSheet.overlay}>
                <Image source={images.checkbox}></Image>
                </View>
                 : null }
                </ImageBackground>
                <Text style={StyleSheet.foodName}>{item.name}</Text>
                </TouchableOpacity>
             </View>
           )}/> 
             <View style={{marginTop:30}}></View>
        <View style={[StyleSheet.flexEnd,StyleSheet.BottomButtonMargin]}>
            <MainButton text={`${countData} Selected`} righIcon={true} onPress={() => onSubmit()}/>
        </View>
      </ScrollView>
    
    </View> 
    )
}
