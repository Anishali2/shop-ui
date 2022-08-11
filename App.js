import React,{useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigations'
import { getStatusBarHeight } from "react-native-status-bar-height";
const App = ()=>{
  useEffect(()=>{
    global.statusBarHeight = getStatusBarHeight()
  },[])
return(
        <NavigationContainer>
          <Navigation/>
        </NavigationContainer>
)

}
export default App;
