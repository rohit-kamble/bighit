import React from 'react'
import { Animated, Dimensions, ScrollView } from 'react-native'
import CarouselBar from '../CarouselBar';
import CarouselList from '../CarouselList';

const stadiumImage = '../../../src/assets/background.png';
const group = '../../../src/assets/group.png';

import { CarouselBarContainer, CarouselContainer } from './styles';

const deviceWidth = Dimensions.get('window').width - 40
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 4

const images = [
    {img: '../../../src/assets/group.png', heading: 'Vote & Support your players'}, 
    {img: '../../../src/assets/group.png', heading: 'showcase your talent'}
]

export default function Carousel() {

    const numItems = images.length
    const itemWidth = (FIXED_BAR_WIDTH / numItems) - ((numItems - 1) * BAR_SPACE)
    const animVal = new Animated.Value(0);
    const imageArray = []
    const barArray = []
    images.forEach(({img, heading}, i) => {
        imageArray.push(<CarouselList {...{deviceWidth, stadiumImage, heading, group}}/>)
        const scrollBarVal = animVal.interpolate({
            inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
            outputRange: [-itemWidth, itemWidth],
            extrapolate: 'clamp',
        })
        barArray.push(<CarouselBar {...{i, scrollBarVal, itemWidth}}/>)
    })

    return (
        <CarouselContainer>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={10}
                pagingEnabled
                onScroll={
                    Animated.event(
                        [{ nativeEvent: { contentOffset: { x: animVal } } }]
                    )
                }
            >
                {imageArray}
            </ScrollView>
            <CarouselBarContainer>{barArray}</CarouselBarContainer>
        </CarouselContainer>
    )
    
}
