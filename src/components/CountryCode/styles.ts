import styled from 'styled-components';
import { View, TextInput, TouchableOpacity, Image, Text } from 'react-native';

export const CountryCodeContainer = styled(View)({
    flex:1, 
    marginHorizontal: 24
})

export const CountryCodeInput = styled(TextInput)({
    paddingVertical: 0, 
    borderBottomWidth: 1, 
    marginLeft: 5, 
    marginBottom: 24,
    fontSize: 18,
    height: 40
})

export const CountryCodeView = styled(TouchableOpacity)({
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 24
})

export const CountryCodeImageContainer = styled(TouchableOpacity)({
    display: 'flex', 
    flexDirection: 'row'
})

export const CountryCodeImage = styled(Image)({
    width: 42, 
    height: 28,
    marginRight: 10
})

export const CountryCodeText = styled(Text)({
    color: '#181818',
    fontSize: 16,
    fontFamily: 'avenir',
    fontWeight: '700',
    textAlign: 'center'
})