import styled from 'styled-components';
import {View, TouchableOpacity, Image, Text, TextInput} from 'react-native'

export const MobileInputContainer =  styled(View)({
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center'
})

export const MobileInputCountryCode = styled(TouchableOpacity)({
    minWidth: '20%', 
    marginRight: 10, 
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#AAAAAA',
    marginTop: 5, 
    paddingBottom: 5
})

export const MobileInputCountryImage = styled(Image)({
    width: 26, 
    height: 20, 
    marginRight: 8
})

export const MobileInputCountryCodeText = styled(Text)({
    color: '#AAAAAA'
})

export const MobileInputField = styled(View)({
    minWidth: '50%'
})

export const MobileTextInputField = styled(TextInput)({
    paddingVertical: 0, 
    borderBottomWidth: 1,
    borderColor: '#AAAAAA',
    marginLeft: 5,
    color: '#AAAAAA'
})