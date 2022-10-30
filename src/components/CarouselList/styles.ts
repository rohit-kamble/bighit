import styled from 'styled-components';
import {View, ImageBackground, Image, Text, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const CarouselListContainer = styled(View)<{deviceWidth: any}>(
    ({deviceWidth})=>({
        width: deviceWidth
}))

export const CarouselListImageBackGround = styled(ImageBackground)({
    width: '100%', 
    height: 160, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 50,
    borderRadius: 10
})

export const CarouselListImage = styled(Image)({
    width: '90%', 
    height: 240
})

export const CarouselListImageHeading = styled(Text)({
    position: 'absolute', 
    bottom: 20, 
    fontSize: 28, 
    fontWeight: '900', 
    color: 'white', 
    textAlign: 'center',
    fontFamily: 'futura',
    textTransform:'uppercase',
    zIndex: 1,
    marginHorizontal: 40
})

export const CarouselListImageLinearGradient = styled(LinearGradient)({
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'absolute', 
    top: 0, 
    height: '100%', 
    bottom: 0, 
    left: 0, 
    right: 0
})

export const CarouselListImageDescriptionContainer = styled(View)({
    backgroundColor: 'white'
})

export const CarouselListImageDescription = styled(Text)({
    textAlign: 'center', 
    fontSize: 17, 
    fontWeight: '900', 
    marginHorizontal: 40, 
    marginVertical: 20,
    fontFamily: 'avenir',
})

export const CarouselListImageDescriptionButton = styled(TouchableOpacity)({
    backgroundColor: '#FF5349', 
    alignSelf: 'center', 
    paddingHorizontal: 20, 
    borderRadius: 30, 
    paddingVertical: 10,
})

export const CarouselListImageDescriptionButtonText = styled(Text)({
    color: 'white',
    fontFamily: 'avenir',
    fontWeight: '600',
})