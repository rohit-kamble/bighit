import React, {useRef, useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Text, View, Animated, Image } from 'react-native';
import HomePage from '../HomePage';

const Tab = createMaterialBottomTabNavigator();
export default function BottomMenu(props: any) {

    return (
        <Tab.Navigator
            headerMode="none"
            initialRouteName="Home"
            activeColor="blue"
            inactiveColor="transparent"
            labelStyle={{ fontSize: 12 }}
            backBehavior="history"
            labeled={false}
            barStyle={{backgroundColor: 'white'}}
        >
            
            <Tab.Screen
                name="Home"
                options={{
                    // tabBarLabel: 'none',
                    tabBarIcon: ({ focused, color }) => (
                        <Image
                            source={require('../../../src/assets/tabicon/home.png')}
                            style={{
                                tintColor: focused ? color : 'black'
                            }}
                        />
                    ),
                }}
            >
                {() => {
                    return <View ><HomePage/></View>;
                }}
            </Tab.Screen>
            <Tab.Screen
                name="Video"
                options={{
                    // tabBarLabel: 'Video',
                    tabBarIcon: ({focused, color}) => (
                        <Image
                            source={require('../../../src/assets/tabicon/video.png')}
                            style={{
                                tintColor: focused && color
                            }}
                        />
                    ),
                }}
            >
                {() => {
                    return(
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Video </Text>
                        </View>
                    ) 
                }}
            </Tab.Screen>
            <Tab.Screen
                name="Dashboard"
                options={{
                    tabBarIcon: ({focused, color}) => (
                        <Image
                            source={require('../../../src/assets/tabicon/dashboard.png')}
                            style={{
                                tintColor: focused && color,
                                height: 30,
                                width: 30
                            }}
                        />
                    ),
                }}
            >
                {() => {
                    return(
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>DashBoard </Text>
                        </View>
                    ) 
                }}
            </Tab.Screen>
            <Tab.Screen
                name="Profile"
                options={{
                    tabBarIcon: ({focused, color}) => (
                        <Image
                            source={require('../../../src/assets/tabicon/profile.png')}
                            style={{
                                tintColor: focused && color
                            }}
                        />
                    ),
                }}
            >
                {() => {
                    return(
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Profile </Text>
                        </View>
                    ) 
                }}
            </Tab.Screen>
            <Tab.Screen
                name="Notification"
                options={{
                    tabBarIcon: ({focused, color}) => (
                        <Image
                            source={require('../../../src/assets/tabicon/notification.png')}
                            style={{
                                tintColor: focused && color
                            }}
                        />
                    ),
                }}
            >
                {() => {
                    return(
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Notification </Text>
                        </View>
                    ) 
                }}
            </Tab.Screen>
        </Tab.Navigator>
    );
}
