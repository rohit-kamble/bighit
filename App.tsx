/** @format */

import React, {useEffect, useState, useCallback} from 'react'
import { View } from 'react-native'
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import Login from './src/components/LoginBackgroundImage'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomMenu from './src/components/BottomMenu'
import CountryCode from './src/components/CountryCode'

const Stack = createNativeStackNavigator();

export default function App() {
    const [countryInfo, setInfo] = useState({});
    const [fontsLoaded] = useFonts({
        futura: require('./src/assets/font/Futura-Bold-font.ttf'),
        avenir: require('./src/assets/font/Avenir-light.otf')
    })

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync()
        }
        prepare()
    }, [])

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    const handledSearch = (item) => {
        setInfo(item)
    }

    if (!fontsLoaded) {
        return null
    }
    return (
        <View style={{flex:1}} onLayout={onLayoutRootView}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login">
                        {(props: any)=> <Login navigation={props.navigation} countryInfo={countryInfo}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Home">
                        {()=> <BottomMenu/>}
                    </Stack.Screen>
                    <Stack.Screen name="CountryCode">
                        {(props: any)=> <CountryCode navigation={props.navigation} handledSearch={handledSearch}/>}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}
