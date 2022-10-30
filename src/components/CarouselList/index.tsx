import React from 'react';
import {View, ImageBackground, Image,  Text, TouchableOpacity} from 'react-native';
import {
    CarouselListContainer, 
    CarouselListImageBackGround, 
    CarouselListImage, 
    CarouselListImageHeading,
    CarouselListImageLinearGradient,
    CarouselListImageDescriptionContainer,
    CarouselListImageDescription,
    CarouselListImageDescriptionButton,
    CarouselListImageDescriptionButtonText
} from './styles';
import { LinearGradient } from 'expo-linear-gradient';


export default function CarouselList ({deviceWidth, stadiumImage, heading, group}: any) {
    return (
        <CarouselListContainer deviceWidth={deviceWidth} key={`image ${heading}`}>
            <CarouselListImageBackGround source={require('../../../src/assets/background.png')} imageStyle={{ borderRadius: 10}} resizeMode="cover">
                <CarouselListImage source={require('../../../src/assets/group.png')}/>
                <CarouselListImageHeading>{heading}</CarouselListImageHeading>
                <CarouselListImageLinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} start={{ x: 0, y: 0.9 }} end={{ x: 0, y: 0 }}/>
            </CarouselListImageBackGround>
            <CarouselListImageDescriptionContainer>
                <CarouselListImageDescription>Vote & support players to help them to get on the top</CarouselListImageDescription>
                <CarouselListImageDescriptionButton>
                    <CarouselListImageDescriptionButtonText>Explore & Vote</CarouselListImageDescriptionButtonText>
                </CarouselListImageDescriptionButton>
            </CarouselListImageDescriptionContainer>
        </CarouselListContainer>
    )
}