/** @format */

import {Image, ImageBackground, Text, View} from 'react-native'
import styled from 'styled-components/native'

export const BackGroundWrapper = styled(View)({
    height: '60%',
    position: 'relative',
    width: '100%',
    top: 0,
    backgroundColor: 'white',
})

export const BackgroundImage = styled(ImageBackground)({
    flex: 1,
    justifyContent: 'center',
})

export const BackGroundContainer = styled(View)({
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
})

export const LogoImage = styled(Image)({
    height: 120, 
    width: 119,
    marginBottom: 16,
    marginTop: 50,
})

export const Heading = styled(Text)({
    color: 'white',
    fontFamily: 'futura',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 900,
    marginBottom: 12,
})

export const GroupImage = styled(Image)({
    height: 306, 
    width: 336
})

export const SketchImage = styled(Image)({
    position: 'absolute',
    height: 40,
    width: '117%',
    margin: 0,
    bottom: -5,
})