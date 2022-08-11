import React, { Component } from 'react';
import { View, Text, Image, StatusBar, ImageBackground,TouchableOpacity } from 'react-native';
import { colors, images, fonts } from '../../constraints';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StyleSheet from '../../assets/css/style'
import { Splash } from '../../assets/svg';
// import { Logo} from 'svg';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionState: 'false'
        };

    }

    async componentDidMount() {
        let session = await AsyncStorage.getItem('session');
        setTimeout(() => {
            if(session == 'true'){
            this.props.navigation.replace("UserSelection");

            }else{
            this.props.navigation.replace("UserSelection");
            }
        }, 2000);
    }
    
    render() {
        return (
            <View style={StyleSheet.splashScreen}>
                <StatusBar  translucent={true} hidden={false} backgroundColor={"transparent"}/>
                 <Splash />
                 <Text style={[StyleSheet.blackBold,{textAlign:"center",fontSize:40,paddingVertical:20}]}>ShopinLive</Text>
            </View>
        );
    }
}
