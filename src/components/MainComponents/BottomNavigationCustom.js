import React, { useState } from 'react'
import { Text, Pressable, View, } from 'react-native';
import { colors, fonts,  } from '../../constraints';
import { 
    HomeIcon,
    HomeActive,
    CartIcon,
    CartActive,
    UserIcon,
    UserActive,
    FavouriteIcon,
    FavouriteActive,
MessageIcon,MessageActive } 
    from 'svg';
import { useNavigation } from '@react-navigation/native';
import StyleSheet from "../../assets/css/style";
import Icon from 'react-native-vector-icons/AntDesign';
 const BottomNavigationCustom = ({...props}) => {

     const navigation = useNavigation();
     const [change,setChange]=useState(1)
        return (
        <>
    
            <View style={{width: '100%', backgroundColor: 'white', marginTop:'auto',borderTopColor:"#dfdfdf",borderTopWidth:1}}>

                <View >
                    <View style={[StyleSheet.flexRowSpaceBetween,{paddingHorizontal:10,paddingVertical:10}]}>
                    
                       
                        <Pressable
                            onPress={() => navigation.navigate("Home")}
                            style={StyleSheet.bottomNavigation}>
                            {props.activeTab1 ?
                            <>
                                <HomeActive/>
                            </>:<>
                                <HomeIcon/>
                            </>
                                }
                        </Pressable> 
                        <Pressable
                            onPress={() => navigation.navigate("Notification")}
                            style={StyleSheet.bottomNavigation}>
                            {props.activeTab2 ?
                            <>
                                <FavouriteActive/>
                            </>:<>
                                <FavouriteIcon/>
                            </>
                                }
                        </Pressable> 
                        <Pressable
                            onPress={() => navigation.navigate("LiveStream")}
                            style={StyleSheet.bottomNavigation}>
                            {props.activeTab3 ?
                            <>
                                <CartActive/>
                                <Text style={{color:"red"}}>Go Live</Text>
                            </>:<>
                                <CartIcon/>
                            </>
                                }
                        </Pressable>
                        <Pressable
                            onPress={() => navigation.navigate("MessagesList")}
                            style={StyleSheet.bottomNavigation}>
                            {props.activeTab4 ?
                            <>
                                <MessageActive/>
                            </>:<>
                                <MessageIcon/>
                            </>
                                }
                        </Pressable> 
                        <Pressable
                            onPress={() => navigation.navigate("Account")}
                            style={StyleSheet.bottomNavigation}>
                            {props.activeTab5 ?
                            <>
                                <UserActive/>
                            </>:<>
                                <UserIcon/>
                            </>
                                }
                        </Pressable> 
                      
                    </View>
                </View>

            </View>
                                </>
        )
    }


    export default BottomNavigationCustom