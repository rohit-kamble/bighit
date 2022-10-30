import React from 'react';
import {View, ImageBackground, Image,  Text, TouchableOpacity} from 'react-native';

export default function CarouselList ({deviceWidth, stadiumImage, heading, group}: any) {
    return (
        <View style={{ width: deviceWidth, height: '60%' }} key={`image ${heading}`}>
            <ImageBackground source={require('../../../src/assets/background.png')} style={{width: deviceWidth, height: 160, alignItems: 'center', justifyContent: 'center', marginTop: 50}} resizeMode="cover">
                <Image source={require('../../../src/assets/group.png')} style={{width: '80%', height: 240, position:'relative', top: -10 }}/>
                <Text style={{position: 'absolute', bottom: 20, fontSize: 28, fontWeight: '900', color: 'white', textAlign: 'center'}}>{heading}</Text>
            </ImageBackground>
            <View style={{backgroundColor: 'white'}}>
                <Text style={{textAlign: 'center', flex: 0, fontSize: 17, fontWeight: '900', marginHorizontal: 40, marginVertical: 20}}>
                    Vote & support players to help them to get on the top
                </Text>
                <TouchableOpacity style={{ backgroundColor: '#FF5349', alignSelf: 'center', paddingHorizontal: 20, borderRadius: 30, paddingVertical: 10}}>
                    <Text style={{color: 'white'}}>Explore & Vote</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}