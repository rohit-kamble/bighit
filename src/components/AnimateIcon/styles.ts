import styled from 'styled-components';
import { Text } from 'react-native';
import LottieView from 'lottie-react-native';

export const AnimatedText = styled(Text)({
    color: '#181818', 
    textAlign: 'center', 
    fontWeight: '900', 
    fontFamily: 'avenir'
})

export const LottieViewContainer = styled(LottieView)({
    width: 200,
    height: 200
})