import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Button,
  TouchableOpacity,
} from "react-native";
import StyleSheet from "../../../assets/css/style";
import { images } from "../../../constraints";
// import { Settings,Back }  from 'svg';
 import { MainButton } from "../../../components/MainComponents/MainButton";
export default class Intro extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit() {
    this.props.navigation.navigate("GetStarted");
  }
  loginSubmit(){
    this.props.navigation.navigate("Login");
  }
  render() {
    return (
      <View>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <ImageBackground
          source={images.intro}
          style={StyleSheet.backgroundImage}>
          <View style={[StyleSheet.flexEnd,{width:'80%'}]}>
            <Text style={[StyleSheet.heading, { marginBottom: 15 }]}>
              Get your favorite food delivered.
            </Text>
            <MainButton text={"Get Started"} onPress={() => this.onSubmit()} />
            <View style={{ marginTop: 15 }}></View>
            <View style={StyleSheet.flexRowCenter}>
              <Text style={StyleSheet.subHeading}>Have an account?</Text>
              <TouchableOpacity  onPress={()=>this.loginSubmit()}>
                <Text style={StyleSheet.transparentBtn}>Login</Text>
              </TouchableOpacity>
       
            </View>
       
          </View>
        </ImageBackground>
      </View>
    );
  }
}
