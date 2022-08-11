import React,{useState,useEffect,useRef} from "react";
import { Text,View,ScrollView,TextInput,Keyboard,TouchableOpacity,Image} from 'react-native';
import StyleSheet from '../../assets/css/style'
import MyContainer from '../../components/MainComponents/MyContainer';
import { MainButton, OutlineButton } from "../../components/MainComponents/MainButton";
import { SignupProgressBar } from "../../components/MainComponents/SignupProgressBar";
import { MapPin,RadioButtons } from 'svg'
import { colors, fonts,images } from "../../constraints";
 const SearchLocation = (props) => {
     const AddressSheet = useRef();
     const [location,setLocation] = useState('')
     const [keyboardStatus, setKeyboardStatus] = useState('true');
     const [currentLoc, setCurrentLoc] = useState(true);

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

      const currentLocation = () =>{
        setCurrentLoc(false)
      }

      const onSubmit = () =>{
        props.navigation.navigate('Notification') 
      }

    return(
        <>
        <View style={[StyleSheet.whiteBackground,StyleSheet.leftPadding]}>  
        <MyContainer {...props} step='Step 3'/>
        <SignupProgressBar value={0.75}/>
        <Text style={StyleSheet.signupHeading}>Where do you want to be delivered?</Text>
            <Text style={StyleSheet.signupSubHeading}>Please enter the address</Text>
            <View style={{marginTop:20}}></View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[StyleSheet.input]}>
            <View style = {{flexDirection:'row',alignContent:'center',alignItems:'center'}}>
            <MapPin style={{width:30,marginLeft:10}}/>
            <TextInput
                    style={[StyleSheet.inputText,{width:'80%'}]}
                    placeholder='Search Location'
                    placeholderTextColor={colors.greyColor}
                    onChangeText={e=>setLocation(e)}
                    value={location}
                    color={colors.headingColor}
                    // keyboardType='text'
            />
            </View>
           </View>
           <View style={{marginTop:20}}></View>
           {
               currentLoc == true ?
              <OutlineButton text={'Use your current location'} onPress={() => currentLocation()}/>
             :
                <>
                <View style={StyleSheet.flexRowSpaceBetween}>
                    <Text style={StyleSheet.signupSubHeading}>Your current location</Text>
                    <TouchableOpacity><Text style={StyleSheet.transparentBtn}>Retry</Text></TouchableOpacity>
                </View>
                <View style={{marginTop:15}}></View>
                <View style={StyleSheet.addressCard}>
                <View style={[StyleSheet.flexRowSpaceBetween,StyleSheet.addressCardPadding]}>
                    <View>
                    <Text style={[StyleSheet.signupSubHeading,{fontFamily:fonts.SemiBold}]}>18th Avenue</Text>
                    <Text style={[StyleSheet.signupSubHeading,{fontSize:14,marginTop:3}]}>18th Avenue Brooklyn, NY</Text>
                    </View>
                    <Image source={images.radioButton} style={{width:20,height:20,marginTop:10}}></Image>
                </View>
                <View style={{borderWidth:0.3,borderColor:colors.borderColor,marginTop:-5}}></View>
                 <Text style={[StyleSheet.greySubHeading,{paddingLeft:15,paddingTop:10,
                paddingBottom:10}]}>Tap to add detail & delivery instructions</Text>
                </View>

                </>
             }

            </ScrollView>
            {
                    keyboardStatus == 'true' ? 
                    <View style={[StyleSheet.flexEnd,StyleSheet.BottomButtonMargin]}>
                        <MainButton  text={"Continue"} onPress={() => onSubmit()}/>
                    </View>
                : null
            }

            {/* <AddressDetail
              refCustom={AddressSheet}
              {...props}
              onPressCancel={() => AddressSheet.current.close()}
            /> */}
           </View>
         
      </>
    )
}
export default SearchLocation
