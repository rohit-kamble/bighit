import { Animated } from 'react-native';
import { CarouselBarContainer} from './styles';
import { CarouselBarProps } from './types';

export default function CarouselBar({i, scrollBarVal, itemWidth}: CarouselBarProps) {
    return (
        <CarouselBarContainer
            key={`bar${i}`}
            index={i}
        >
            <Animated.View
                style={{
                        backgroundColor: 'black',
                        height: 2,
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: itemWidth,
                        transform: [
                            { translateX: scrollBarVal },
                        ],
                    }}
            />
        </CarouselBarContainer>
    )
}