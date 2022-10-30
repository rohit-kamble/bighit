import React, { Component } from 'react'
import { Animated, View, StyleSheet, Image, Dimensions, ScrollView , Text, TouchableOpacity, ImageBackground} from 'react-native'
import CarouselList from '../CarouselList';
const stadiumImage = '../../../src/assets/background.png';
const group = '../../../src/assets/group.png';

const deviceWidth = Dimensions.get('window').width - 40
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 4

const images = [
    {img: '../../../src/assets/group.png', heading: 'Vote & Support your players'}, 
    {img: '../../../src/assets/group.png', heading: 'showcase your talent'}
]

export default class Carousel extends Component {

    numItems = images.length
    itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
    animVal = new Animated.Value(0)

    render() {
        const imageArray = []
        const barArray = []
        images.forEach(({img, heading}, i) => {
            imageArray.push(<CarouselList {...{deviceWidth, stadiumImage, heading, group}}/>)

            const scrollBarVal = this.animVal.interpolate({
                inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
                outputRange: [-this.itemWidth, this.itemWidth],
                extrapolate: 'clamp',
            })

            const thisBar = (
                <View
                    key={`bar${i}`}
                    style={[
                        styles.track,
                        {
                            marginLeft: i === 0 ? 0 : BAR_SPACE,
                        },
                    ]}
                >
                    <Animated.View

                        style={[
                            styles.bar,
                            {
                                width: this.itemWidth,
                                transform: [
                                    { translateX: scrollBarVal },
                                ],
                            },
                        ]}
                    />
                </View>
            )
            barArray.push(thisBar)
        })

        return (
            <View
                style={styles.container}
                // flex={1}
            >
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    // contentContainerStyle={}
                    scrollEventThrottle={10}
                    pagingEnabled
                    // style={{ flexGrow: 1, backgroundColor: 'red', paddingTop: 50 }}
                    onScroll={
                        Animated.event(
                            [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
                        )
                    }
                >
                    {/* {imageArra<View>
                        <View>{imageArray}</View>
                        <View><Text>rohi</Text></View>
                    </View  > */}
                    {imageArray}
                </ScrollView>
                <View
                    style={styles.barContainer}
                >
                    {barArray}
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginLeft: 0,
        marginRight: 40,
        // backgroundColor: 'red',
        height: 400
    },
    barContainer: {
        position: 'absolute',
        zIndex: 2,
        bottom: 20,
        flexDirection: 'row',

        // marginHorizontal: 100,
    },
    skip: {
        position: 'absolute',
        // top: 100,
        zIndex: 2,
        bottom: -1,
        flexDirection: 'row',
    },
    track: {
        backgroundColor: 'white',
        overflow: 'hidden',
        // height: 2,
        position: 'relative',
        top: 30,
        width: 4,
        height: 4,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 50,
    },
    bar: {
        backgroundColor: 'black',
        height: 2,
        position: 'absolute',
        left: 0,
        top: 0,
    },
})