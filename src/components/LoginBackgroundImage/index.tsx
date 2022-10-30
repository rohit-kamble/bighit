import React from 'react'
import { ScrollView } from 'react-native';
import LoginButton from '../LoginButton';
import { 
    Heading, 
    BackgroundImage, 
    BackGroundWrapper, 
    BackGroundContainer,
    LogoImage,
    GroupImage,
    SketchImage,
} from './styles'

const stadiumImage = '../../../src/assets/background.png';
const logo = '../../../src/assets/bighit-logo.png';
const group = '../../../src/assets/group.png';
const sketch = '../../../src/assets/sketch-transparent.png';

export default function Login(props: any ) {
    return (
        <ScrollView>
            <BackGroundWrapper>
                <BackgroundImage source={require(stadiumImage)} resizeMode="cover">
                    <BackGroundContainer>
                        <LogoImage source={require(logo)} />
                        <Heading>INDIA’S 1ST {'\n'} SPORTS ECOSYSTEM APP</Heading>
                        <GroupImage source={require(group)}/>
                        <SketchImage source={require(sketch)}/>
                    </BackGroundContainer>
                </BackgroundImage>
            </BackGroundWrapper>
            <LoginButton navigation={props.navigation} countryInfo={props.countryInfo}/>
        </ScrollView>
    )
}