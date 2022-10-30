import styled from 'styled-components';
import { View } from 'react-native';

export const CarouselContainer = styled(View)({
    alignItems: 'center',
    marginLeft: 0,
    marginRight: 40,
    // backgroundColor: 'red',
    height: 340
})

export const CarouselBarContainer = styled(View)({
    position: 'absolute',
    zIndex: 1,
    bottom: 20,
    flexDirection: 'row',
})