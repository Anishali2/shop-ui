import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Intro from '../screens/Intro/Intro/Intro';
import SplashScreen from '../screens/SplashScreen/SplashScreen';

import Account from '../screens/Account/Account';

import Profile from '../screens/Account/Profile';
import Home from '../screens/Home/Home';
import UserSelection from '../screens/UserSelection/UserSelection';
import SellerSignup from '../screens/Signup/SellerSignup';
import SellerLogin from '../screens/Login/SellerLogin';
import BuyerSignup from '../screens/Signup/BuyerSignup';
import BuyerLogin from '../screens/Login/BuyerLogin';
import SignupVerify from '../screens/Signup/SignupVerify';
import MessagesList from '../screens/Messages/MessagesList';
import Chat from '../screens/Messages/Chat';
import Notification from '../screens/Notification/Notification';
import Followers from '../screens/Account/Followers';
import Payment from '../screens/Checkout/Payment';
import WelcomeSeller from '../screens/Home/WelcomeSeller';
import SellerAccount from '../screens/Account/SellerAccount';

import SellerReview from '../screens/Account/SellerReview';
import ReviewDetails from '../screens/Account/ReviewDetails';
import SellerProfile from '../screens/Account/SellerProfile';
import BuyerProfile from '../screens/Account/BuyperProfile';
import Setting from '../screens/Account/Setting';
import LiveStream from '../screens/Account/LiveStream';
import ManageMyStore from '../screens/Account/ManageMyStore';
import LeaveAReview from '../screens/Account/LeaveAReview';
import AddProduct from '../screens/Account/AddProduct';
import ModifyProduct from '../screens/Account/ModifyProduct';
import SalesSummary from '../screens/Account/SalesSummary';
import SalesSummary2 from '../screens/Account/SalesSummary2';
import PurchaseSummary from '../screens/Account/PurchaseSummary';
import PurchaseSummary2 from '../screens/Account/PurchaseSummary2';
import ForgetPasword from '../screens/Account/ForgetPasword';
import OTPScreen from '../screens/Account/OTPScreen';
import SearchFilters from '../screens/Account/SearchFilters';
import Posts from '../screens/Account/Posts';
import Subscription from '../screens/Account/Subscription';
const Stack = createNativeStackNavigator();

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Stack.Navigator initialRouteName='Account'
          screenOptions={{headerShown: false,animation:"fade_from_bottom"}}>
         <Stack.Screen name="Setting" component={Setting} />

         {/* Worked Screens */}

         <Stack.Screen name="Subscription" component={Subscription} />
         <Stack.Screen name="Posts" component={Posts} />
         <Stack.Screen name="OTPScreen" component={OTPScreen} />
         <Stack.Screen name="ForgetPasword" component={ForgetPasword} />
         <Stack.Screen name="PurchaseSummary2" component={PurchaseSummary2} />
         <Stack.Screen name="PurchaseSummary" component={PurchaseSummary} />
         <Stack.Screen name="SalesSummary2" component={SalesSummary2} />
         <Stack.Screen name="SalesSummary" component={SalesSummary} />
         <Stack.Screen name="ModifyProduct" component={ModifyProduct} />
         <Stack.Screen name="AddProduct" component={AddProduct} />
         <Stack.Screen name="LeaveAReview" component={LeaveAReview} />

         <Stack.Screen name="LiveStream" component={LiveStream} />


         <Stack.Screen name="ManageMyStore" component={ManageMyStore} />
         <Stack.Screen name="Notification" component={Notification} />
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Account" component={Account} />
         <Stack.Screen name="Profile" component={Profile} />
         <Stack.Screen name="Chat" component={Chat} />
         <Stack.Screen name="WelcomeSeller" component={WelcomeSeller} />
         <Stack.Screen name="Payment" component={Payment} />
         <Stack.Screen name="Followers" component={Followers} />
         <Stack.Screen name="SellerAccount" component={SellerAccount} />
         <Stack.Screen name="SellerReview" component={SellerReview} />
         <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
         <Stack.Screen name="SellerProfile" component={SellerProfile} />
         <Stack.Screen name="BuyerProfile" component={BuyerProfile} />
         <Stack.Screen name="SplashScreen" component={SplashScreen} />
         <Stack.Screen name="UserSelection" component={UserSelection} />
         <Stack.Screen name="SellerLogin" component={SellerLogin} />
         <Stack.Screen name="SellerSignup" component={SellerSignup} />
         <Stack.Screen name="MessagesList" component={MessagesList} />
         <Stack.Screen name="SignupVerify" component={SignupVerify} />
         <Stack.Screen name="BuyerLogin" component={BuyerLogin} />
         <Stack.Screen name="BuyerSignup" component={BuyerSignup} />
         {/* Help Navigation Screens */}

        </Stack.Navigator>
    );
  }
}
