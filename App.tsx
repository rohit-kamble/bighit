/** @format */

import React, {useEffect, useCallback} from 'react'
import { ScrollView, View, StatusBar  } from 'react-native'
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import Login from './src/components/LoginBackgroundImage'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
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

    if (!fontsLoaded) {
        return null
    }
    console.log('stact', Stack);
    return (
        // <View style={{flex:1}} onLayout={onLayoutRootView}>
        //     <StatusBar />
        //     <ScrollView>
        //         <Login/>
        //     </ScrollView>
        // </View>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Login} />
            {/* <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
    )
}
