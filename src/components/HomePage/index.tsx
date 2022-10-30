import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from '../Carousel';
// import Carousel from '../Carousel';

export default function HomePage(){
    return (
        <View style={{justifyContent: 'center', height: 300, borderRadius: 120, position: 'relative'}}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#EE82EE', '#8A2BE2', '#192f6a']}
                style={{flex: 1, justifyContent: 'center', alignContent: 'center', borderBottomLeftRadius: 125, borderBottomRightRadius: 125}}
                start={{x: 0.1, y: 0.2}}
                end={{x:0.9, y:0.8}}
            >
            </LinearGradient>
            <View style={{position: 'absolute', top: 50, width: '100%'}}>
                <View style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', flexDirection: 'row', marginHorizontal: 20, marginBottom: 40}}>
                    <Text style={{color: 'white'}}>welcome to <Text style={{fontWeight: '900'}}>BigHit</Text> {'\n'} india biggest sport platform</Text>
                    <TouchableOpacity style={{borderColor: 'white', borderWidth: 1, borderRadius: 30, paddingHorizontal: 10, justifyContent: 'center'}}>
                        <Text style={{color: 'white'}}>create Profile</Text>
                    </TouchableOpacity>
                
                </View>
                <View style={{height: 200, marginHorizontal: 20, width: '100%'}}>
                    <Carousel/>
                </View>
            
            </View>
            
            
        </View>
    )
}