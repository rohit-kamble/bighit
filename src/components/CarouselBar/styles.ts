import styled from 'styled-components';
import { View, Animated} from 'react-native';

export const CarouselBarContainer = styled(View)<{index: number}>(
    ({index})=>({
    backgroundColor: 'white',
    overflow: 'hidden',
    position: 'relative',
    top: 30,
    width: 4,
    height: 4,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 50,
    marginLeft: index === 0 ? 0 : 4
}))