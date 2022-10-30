import React from 'react';
import { ChangeMobileContainer, ChangeMobileText, ChangeMobileClickText} from './styles';
import { TouchableOpacity } from 'react-native';
import { ChangeMobileProps } from './types';

export default function ChangeMobile({state, changeMobileNo, code}: ChangeMobileProps){
    return (
        <ChangeMobileContainer>
            <ChangeMobileText>{code.concat(state)}</ChangeMobileText> 
            <TouchableOpacity onPress={changeMobileNo}>
                <ChangeMobileClickText>Change</ChangeMobileClickText>
            </TouchableOpacity>
        </ChangeMobileContainer>
    )
}