import {Stack} from 'expo-router'
import {useState} from "react";
import{useCallback} from "react";
import  * as SplashScreen from 'expo-splash-screen'
import {useFonts} from "expo-font";

SplashScreen.preventAutoHideAsync();
const Layout = () =>{
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),

    })
    const onLoasFont = useCallback(async ()=>{
    if(fontsLoaded){
        await SplashScreen.hideAsync();
    }},[fontsLoaded])
    if(!fontsLoaded) return null;

    return <Stack onLayout={onLoasFont} />;
}

export default Layout;