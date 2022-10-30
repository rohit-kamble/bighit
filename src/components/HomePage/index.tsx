import React from 'react';
import Carousel from '../Carousel';
import {
    HomePageContainer, 
    HomePageLinearGradient,
    HomePageTextContainer, 
    HomePageTextView,
    HomePageWelcomeText,
    HomePageProfileButton,
    HomePageProfileButtonText,
    HomePageCarouselView
} from './styles';

export default function HomePage(){
    return (
        <HomePageContainer>
            <HomePageLinearGradient colors={['#EE82EE', '#8A2BE2', '#192f6a']} start={{x: 0.1, y: 0.2}} end={{x:0.9, y:0.8}}/>
            <HomePageTextContainer>
                <HomePageTextView>
                    <HomePageWelcomeText>welcome to <HomePageWelcomeText isBold={true}>BigHit</HomePageWelcomeText> {'\n'} india biggest sport platform</HomePageWelcomeText>
                    <HomePageProfileButton><HomePageProfileButtonText>create Profile</HomePageProfileButtonText></HomePageProfileButton>
                </HomePageTextView>
                <HomePageCarouselView><Carousel/></HomePageCarouselView>
            </HomePageTextContainer>
        </HomePageContainer>
    )
}