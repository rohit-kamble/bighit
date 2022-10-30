import React from 'react';
import { ChangeMobileContainer, ChangeMobileText, ChangeMobileClickText} from './styles';
import { TouchableOpacity } from 'react-native';

export default function ChangeMobile({state, changeMobileNo, code}: any){
    return (
        <ChangeMobileContainer>
            <ChangeMobileText>{code.concat(state)}</ChangeMobileText> 
            <TouchableOpacity onPress={changeMobileNo}>
                <ChangeMobileClickText>Change</ChangeMobileClickText>
            </TouchableOpacity>
        </ChangeMobileContainer>
    )
}