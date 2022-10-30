import styled from 'styled-components';
import { View, Text } from 'react-native';

export const ChangeMobileContainer = styled(View)({
    display: 'flex', 
    flexDirection: 'row'
})

export const ChangeMobileText = styled(Text)({
    color: 'gray'
})

export const ChangeMobileClickText = styled(Text)({
    color: '#0062FF', 
    fontFamily: 'avenir',
    fontWeight: '900',
    marginLeft: 10
})