import { Text } from 'react-native';
import styled from 'styled-components/native';

export const WelcomeHeading = styled(Text)({
    fontFamily: 'avenir',
    fontSize: 22,
    marginBottom: 27
})

export const OtpHeading = styled(Text)({
    fontFamily: 'avenir',
    fontSize: 17,
    marginBottom: 27,
    marginTop: 22,
    color: '#0062FF'
})

export const LetsGoText = styled(Text)({
    fontSize: 18,
    fontWeight: 600,
    color: '#FFFFFF'
})

export const ExploreHeading = styled(Text)({
    fontFamily: 'avenir',
    fontSize: 14,
    marginBottom: 20,
    marginTop: 22,
    fontWeight: 900,
    color: '#0062FF',
    textTransform: 'capitalize'
})

export const AgreeDescription = styled(Text)({
    fontFamily: 'avenir',
    fontSize: 14
})