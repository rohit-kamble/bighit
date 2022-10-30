import React from 'react';
import { 
    MobileInputContainer, 
    MobileInputCountryCode, 
    MobileInputCountryImage, 
    MobileInputCountryCodeText, 
    MobileInputField,
    MobileTextInputField
} from './styles';
import { MobileInputProps } from './types';

export default function MobileInput({flag, navigation, code, handledPhone, state}: MobileInputProps){
    return (
        <MobileInputContainer>
            <MobileInputCountryCode onPress={()=> navigation.navigate('CountryCode')}>
                <MobileInputCountryImage source={{uri: flag}} />
                <MobileInputCountryCodeText>{code}</MobileInputCountryCodeText>
            </MobileInputCountryCode>
            <MobileInputField>
                <MobileTextInputField
                    inlineImageLeft='search_icon'
                    value={state}
                    onChangeText={handledPhone}
                    placeholder="Mobile No"
                    keyboardType='phone-pad'
                    underlineColorAndroid={'transparent'}
                    maxLength={10}
                />
            </MobileInputField>
        </MobileInputContainer>
    )
}