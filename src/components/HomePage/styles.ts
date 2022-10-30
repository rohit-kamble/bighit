import styled from 'styled-components';
import { View, Text, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const HomePageContainer = styled(View)({
    justifyContent: 'center', 
    height: 300, 
    borderRadius: 120, 
    position: 'relative'
})

export const HomePageLinearGradient = styled(LinearGradient)({
    flex: 1, 
    justifyContent: 'center', 
    alignContent: 'center', 
    borderBottomLeftRadius: 125, 
    borderBottomRightRadius: 125
})

export const HomePageTextContainer = styled(View)({
    position: 'absolute', 
    top: 50, 
    width: '100%'
})

export const HomePageTextView = styled(View)({
    display: 'flex', 
    justifyContent: 'space-between', 
    alignContent: 'center', 
    flexDirection: 'row', 
    marginHorizontal: 20, 
    marginBottom: 40
})

export const HomePageWelcomeText = styled(Text)<{isBold?: boolean}>(
    ({isBold})=>({
    fontFamily: 'avenir',
    color: 'white',
    fontSize: 14,
    textTransform:'capitalize',
    fontWeight: isBold ? '900': '400'
}))

export const HomePageProfileButton= styled(TouchableOpacity)({
    borderColor: 'white', 
    borderWidth: 1, 
    borderRadius: 30, 
    paddingHorizontal: 10, 
    justifyContent: 'center'
})

export const HomePageProfileButtonText = styled(Text)({
    color: 'white', 
})

export const HomePageCarouselView = styled(View)({
    height: 200, 
    marginHorizontal: 20, 
    width: '100%'
})