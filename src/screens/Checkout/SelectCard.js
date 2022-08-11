import { View, Dimensions,Text ,TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import StyleSheet from '../../assets/css/style'
import { colors,fonts } from "../../constraints";
import RBSheet from "react-native-raw-bottom-sheet";
import { Close,MasterCard } from "svg"
import { CheckBox } from '../../components/General'
import { MainButton, OutlineButton } from "../../components/MainComponents/MainButton";

let widthD = Dimensions.get('window').width;
let heightD = Dimensions.get('window').height;

const NewWalk_InBooking = (props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(true)

    useEffect(()=>{ },[])
  
    const close = () =>{
        props.changeStatus(false)
    }

    const changeStatus = () =>{
        if(toggleCheckBox)return setToggleCheckBox(false)
        else return setToggleCheckBox(true)
    }
    const addCard = () =>{
        props.refCustom.current.close()
        props.navigation.navigate('AddNewCard')
    }
  
    return (
        <RBSheet
            onClose={()=>close()}
            ref={props.refCustom}
            closeOnDragDown={true}
            height={heightD * 2 / 3.8}
            openDuration={250}
            customStyles={{
                container: {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: colors.whiteColor,
                },
                wrapper: {
                    backgroundColor: "#000"
                },
                draggableIcon: {
                    backgroundColor: colors.greyColor
                }
            }}
        >
            <View style={StyleSheet.leftPadding}>
                <View style={StyleSheet.flexRowSpaceBetween}>
                    <Text style={StyleSheet.heading}>
                        Select Card
                    </Text>
                    <Close />
                </View>
            </View>
            <View style={StyleSheet.horiBorder}></View>
            <View style={StyleSheet.leftPadding}>
            <View style={[StyleSheet.input]}>
                <View style={[StyleSheet.flexRowSpaceBetween,StyleSheet.leftPadding,{marginBottom:30,paddingRight:10,}]}>
                        <View style={[StyleSheet.flexRow,{paddingTop:26}]}>
                            <MasterCard/>
                            <Text style={[StyleSheet.newlabel,{marginLeft:10,paddingTop:3}]}>3739</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={()=>changeStatus()} style={{paddingTop:26}}>
                            <CheckBox checkStatus = {toggleCheckBox}/>
                            </TouchableOpacity>
                        </View>
                    </View>
              </View>

              <View style={[StyleSheet.input]}>
                <View style={[StyleSheet.flexRowSpaceBetween,StyleSheet.leftPadding,{marginBottom:30,paddingRight:10,}]}>
                        <View style={[StyleSheet.flexRow,{paddingTop:26}]}>
                            <MasterCard/>
                            <Text style={[StyleSheet.newlabel,{marginLeft:10,paddingTop:3}]}>3739</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={()=>changeStatus()} style={{paddingTop:26}}>
                            <CheckBox checkStatus = {false}/>
                            </TouchableOpacity>
                        </View>
                    </View>
              </View>
              <View style={{marginTop:15}}></View>
              <OutlineButton text={'Add New Card'} onPress={() =>addCard()}/>
              <View style={{marginTop:15}}></View>
              
              <View style={[StyleSheet.flexEnd,StyleSheet.BottomButtonMargin]}>
                    <MainButton  text={"Use card - 3729"} righIcon={false} onPress={() => onSubmit()}/>
                </View>
            </View>
        </RBSheet>
    )
}

export default NewWalk_InBooking