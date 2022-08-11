import React,{useState,useEffect} from "react";
import { Text,View, TouchableOpacity,FlatList ,Image,Pressable,TextInput,ScrollView} from 'react-native';
import StyleSheet from '../../assets/css/style'
import { colors,fonts } from "../../constraints";
import { CheckBox } from '../../components/General'
import {MasterCard} from 'svg'
import { MainButton } from "../../components/MainComponents/MainButton"
import { MiniMainButton } from "../../components/MainComponents/MiniMainButton"
import BottomNavigationCustom from "../../components/MainComponents/BottomNavigationCustom";

const Cart = (props) =>{
    
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [keyboardStatus, setKeyboardStatus] = useState('true');
    const [count, setCount] = useState(0);
 

      const changeStatus = () =>{
          if(toggleCheckBox)return setToggleCheckBox(false)
          else return setToggleCheckBox(true)
      }

      const onSubmit = () => { 
        props.navigation.navigate("AddNote")
      }
      const counter = (value) => {
              if (value == 1) return setCount(count + 1)
                if(count > 0) {
                  if (value != 1) return setCount(count - 1)
              }
      }
      const [activeList , setActiveList] = useState()
      const [height , setHeight] = useState()

      const [dateList , setDateList] = useState()
      const activeFunc = (index) => {
        if (activeList != index) return setActiveList(index)
        if (activeList == index) return setActiveList(null)

      }
  useEffect(() => {
    let data = [
      {quantity : 1 ,name:'Sweet Corn Sandwich',egg:"Egg · $0.50",cheese:"Cheese · $0.50",price:"$8.00"},
      {quantity : 1 ,name:'French Fries',egg:"",cheese:"",price:"$4.00"},
    ]
    setDateList(data)
  }, [])

    return(
    <View style={[StyleSheet.whiteBackground]}>  
    <View style={StyleSheet.leftPadding}>

    </View>
    <Text style={[StyleSheet.signupHeading,{textAlign:"center",fontSize:20,paddingTop:18}]}>Order</Text>
    <ScrollView>
    <View style={StyleSheet.leftPadding}>

    <View style={[StyleSheet.flexRowSpaceBetween]}>
    <Text style={[StyleSheet.mainText]}>DELIVER TO</Text>
    <View style={{marginRight:-15}}>
    <MiniMainButton  
            text={"CHANGE"} color={colors.primaryColor}
            bg={'white'} radius={10} 
            width={100} height={35}
            padding={0} margin={10}
            />
    </View>
    </View>
     {/**
     *  ____________________________________________
     * |                                        _   |
     * | 18th Avenue                           |_|  | 
     * | 18th Ave,Brooklyn,Ny                       |
     * |                                            |
     * |____________________________________________|
     * |                                            |
     * | Tap to add detail & delivery instructions  |
     * |____________________________________________|
     *  
    */}
    <View style={[StyleSheet.input,{height:'auto'}]}>
        <View style={[StyleSheet.flexRowSpaceBetween,{marginBottom:15,paddingLeft:13,paddingRight:13}]}>
            <View style={StyleSheet.flexColumn}>
                <Text  style={[StyleSheet.label,{marginTop:10,marginLeft:-50}]}>18th Avenue</Text>
                <Text style={[StyleSheet.newlabel]}>18th Ave, Brooklyn, NY</Text>
            </View>
                <View style={{paddingTop:20}}>
                <TouchableOpacity onPress={()=>changeStatus()} >
                <CheckBox checkStatus = {toggleCheckBox}/>
                </TouchableOpacity>
                </View>
        </View>
        <View style={[StyleSheet.line]}/>

                  <TextInput
                    style={StyleSheet.inputText}
                    placeholder='Tap to add detail & delivery instructions'
                    placeholderTextColor={colors.greyColor}
                    color={"black"}
                />
    </View>
    <View style={[StyleSheet.flexRowSpaceBetween]}>
    <Text style={[StyleSheet.mainText]}>PAY WITH</Text>
    <View style={{marginRight:-15}}>
    <MiniMainButton  
            text={"CHANGE"} color={colors.primaryColor}
            bg={'white'} radius={10} 
            width={100} height={35}
            padding={0} margin={10}
            />
    </View>
    </View>

    {/**
     *  ______________________________
     * |  __                       _  |
     * | |__| 3739                |_| | 
     * |______________________________|
     * 
     *  ______________________________
     * |                           _  |
     * | Cash on delievery        |_| | 
     * |______________________________|
     *  
    */}
    <View style={[StyleSheet.input]}>
    <View style={[StyleSheet.flexRowSpaceBetween,StyleSheet.leftPadding,{marginBottom:30,paddingRight:10,}]}>
            <View style={[StyleSheet.flexRow,{paddingTop:26}]}>
                <MasterCard/>
                <Text style={[StyleSheet.newlabel,{marginLeft:10}]}>3739</Text>
            </View>
            <View>
                <TouchableOpacity onPress={()=>changeStatus()} style={{paddingTop:26}}>
                <CheckBox checkStatus = {toggleCheckBox}/>
                </TouchableOpacity>
            </View>
        </View>
      </View>
            <View style={[StyleSheet.input,{paddingTop:2}]}>
            <View style={StyleSheet.flexRowSpaceBetween}>
            <Text style={[StyleSheet.newlabel,{marginLeft:20}]}>Cash on delievery</Text>
                <View style={{marginRight:10}}>
                <TouchableOpacity onPress={()=>changeStatus()} >
                <CheckBox checkStatus = {toggleCheckBox}/>
                </TouchableOpacity>
                </View>
            </View>
            </View>
    

    </View>
    <View style={[StyleSheet.line,{marginTop:20}]}/>
    <View style={[StyleSheet.flexRowSpaceBetween,StyleSheet.leftPadding]}>
    <Text style={[StyleSheet.mainText]}>ADD ORDER NOTES</Text>
    <View style={{marginRight:-30}}>
    <MiniMainButton  
            text={"ADD"} color={colors.primaryColor}
            bg={'white'} radius={10} 
            width={100} height={35}
            padding={0} margin={10}
            />
    </View>
    </View>
    <View style={[StyleSheet.line,StyleSheet.lineCustom,{marginTop:10}]}/>
    <View style={[StyleSheet.leftPadding]}>

    <Text style={[StyleSheet.mainText]}>MY ORDER</Text>
        <View style={[StyleSheet.flexRow]}>
    <Image source={require('../../assets/images/shortImage.png')} 
    style={{height:48,
        width:48,
        borderRadius:8,
        marginTop:15,
        marginLeft:5}}/>
        <Text style={[StyleSheet.mainText,{paddingTop:15,color:colors.greyColor,paddingLeft:10}]}>FROM
            {`\n`}
            <Text style={[StyleSheet.mainText,{lineHeight:20}]}>African Delicious</Text>
        </Text>

    </View>
    <View style={{marginTop:10}} />
    <FlatList
        data = {dateList}
        renderItem = {({item,index})=>(
<>
            <View style={StyleSheet.flexRowSpaceBetween}>
            <View style={StyleSheet.flexRow}>
                <View style={[StyleSheet.daysUnactive,{marginRight:"auto",paddingHorizontal:13,marginTop:15,borderColor:"#e8e8e8"}]}>
                    <View style={StyleSheet.flexColumn}>
                        <Text style={[StyleSheet.categoryText]}>{item.quantity}</Text>
                    </View> 
                </View>
                <View style={StyleSheet.flexColumn}>
                <Text style={[StyleSheet.signupSubHeading,StyleSheet.semi_bold]}>{item.name}</Text>
    
    
                </View>
            </View>
            <Text style={[StyleSheet.label,{marginTop:4}]}>{item.price}</Text>
        </View>
        
    {item.egg ? 
    
<View style={StyleSheet.leftPadding}>
            <Text style={[StyleSheet.mainText,{paddingTop:4,marginLeft:21}]}>{item.egg}</Text>
            <Text style={[StyleSheet.mainText,{paddingTop:4,marginLeft:21}]}>{item.cheese}</Text>
        </View>
:
null
}
<View style={[StyleSheet.line,{marginTop:10}]}/>
   
</>
      )}
    />

    {/**
     *  ____________________________________
     * |                                    |
     * |                    Subtotal  $13.00| 
     * |                         Tax   $0.50|
     * |                Delivery fee    Free| 
     * |____________________________________|
     *     
    */}
<View style={{marginTop:18}}>
    <View style={[StyleSheet.flexRow,{marginLeft:'auto'}]}>
        <Text style={[StyleSheet.newlabel]}>Subtotal</Text>
        <Text style={[StyleSheet.newlabel,StyleSheet.total]}>$13.00</Text>
    </View>
    <View style={[StyleSheet.flexRow,{marginLeft:'auto',marginTop:10}]}>
        <Text style={[StyleSheet.newlabel]}>Tax</Text>
        <Text style={[StyleSheet.newlabel,StyleSheet.total]}>$0.50</Text>
    </View>
    <View style={[StyleSheet.flexRow,{marginLeft:'auto',marginTop:10}]}>
        <Text style={[StyleSheet.newlabel]}>Delivery fee</Text>
        <Text style={[StyleSheet.newlabel,StyleSheet.blueTxt]}>Free</Text>
    </View>
</View>
<View style={[StyleSheet.line,{marginVertical:15}]}/>
<View style={{marginLeft:'auto'}}>
<View style={[StyleSheet.flexRow,{marginLeft:'auto',paddingBottom:10}]}>
        <Text style={[StyleSheet.newlabel]}>Total</Text>
        <Text style={[StyleSheet.newlabel,StyleSheet.total]}>$13.50</Text>
    </View>

</View>
    </View>
    {/**
     *  _______________________
     * |                       |
     * |    Place Your Order   | 
     * |_______________________|
     *     
    */}
    {
        keyboardStatus == 'true' ? 
        <View style={[StyleSheet.flexEnd,StyleSheet.BottomButtonMargin,StyleSheet.leftPadding]}>
            <MainButton  text={"Place Your Order"} righIcon={false} onPress={() => onSubmit()}/>
        </View>
    : null
   }
    </ScrollView>
    <BottomNavigationCustom activeTab3={true}/>
    </View> 
    )
}
export default Cart
