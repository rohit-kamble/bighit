import React from 'react';
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
const stadiumImage = '../../../src/assets/background.png';
const group = '../../../src/assets/group.png';
import { CarouselListProps } from './types';


export default function CarouselList ({deviceWidth, heading}: CarouselListProps) {
    return (
        <CarouselListContainer deviceWidth={deviceWidth} key={`image ${heading}`}>
            <CarouselListImageBackGround source={require(stadiumImage)} imageStyle={{ borderRadius: 10}} resizeMode="cover">
                <CarouselListImage source={require(group)}/>
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