import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedText, LottieViewContainer } from './styles';

export default function AnimatedIcon({isLoading}: any){
    const resource = isLoading ? 
                require('../../assets/animated-images/95029-success.json') : 
                require('../../assets/animated-images/lf30_editor_qfhlc5be.json')
    return (
        <View>
            {isLoading && <AnimatedText>Login Success!'</AnimatedText>} 
            <LottieViewContainer autoPlay source={resource}/> 
        </View>
    )
}