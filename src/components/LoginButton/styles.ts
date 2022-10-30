import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

export const LoginButtonContainer = styled(View)({
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    marginBottom: 20, 
    backgroundColor: 'white'
})

export const WelcomeHeading = styled(Text)<{isBold?: boolean }>(
    ({isBold})=>({
    fontFamily: 'avenir',
    fontSize: 22,
    marginBottom: isBold ? 10 : 27,
    fontWeight: isBold ? '900' : '400',
    color: '#181818'
}))

export const OtpHeading = styled(Text)<{isValid: boolean}>(
    ({isValid})=>({
    fontFamily: 'avenir',
    fontSize: 17,
    marginBottom: 27,
    marginTop: 22,
    color: isValid ? '#0062FF' : '#EA4A04'
}))

export const LetsGoText = styled(Text)({
    fontSize: 18,
    fontWeight: 600,
    color: '#FFFFFF'
})

export const LoginAndSubmitButton = styled(TouchableOpacity)<{enabled: boolean}>(
    ({enabled})=>({
    borderRadius: 30, 
    backgroundColor: enabled? 'black':'#DADDE3', 
    borderColor: 'green', 
    borderWidth: 0,
    paddingHorizontal: 60, 
    paddingVertical: 20, 
    minWidth: 290, 
    alignItems: 'center'
}))

export const ExploreHeading = styled(Text)<{isOtpColor?: boolean}>(
    ({isOtpColor})=>({
    fontFamily: 'avenir',
    fontSize: isOtpColor ? 18 : 14,
    marginBottom: 20,
    marginTop: 22,
    fontWeight: 900,
    color: isOtpColor ? '#808080' :'#0062FF',
    textTransform: 'capitalize'
}))

export const AgreeDescription = styled(Text)({
    fontFamily: 'avenir',
    fontSize: 14
})