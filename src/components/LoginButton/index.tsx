import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { WelcomeHeading, OtpHeading, ExploreHeading, AgreeDescription, LetsGoText } from './styles';
import OtpInputs from 'react-native-otp-inputs';
// import DropDownPicker from "react-native-dropdown-picker";

export default function LoginButton(){
    const [state, setState] = useState('');

    const handledPhone = (event: any) => {
        const str = event.split("");

        // if(str.length === 3 || str.length === 7) {
        //     console.log('hi')
        //     str = str.join('-')
        // }
        console.log('hi', str)
        setState(str.join(""))
    }
    return(
        <>
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <WelcomeHeading>Welcome to <Text style={{fontWeight: '900'}}>BigHit!</Text></WelcomeHeading>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{minWidth: '20%', marginRight: 10, display: 'flex', flexDirection: 'row', alignItems: 'center',borderBottomWidth: 1, marginTop: 5, paddingBottom: 5}}>
                        <Image source={require('../../../src/assets/flag/india.png')} style={{width: 26, height: 20, marginRight: 8}}/>
                        <Text>+91</Text>
                    </View>
                    <View style={{minWidth: '50%'}}>
                        <TextInput
                            inlineImageLeft='search_icon'
                            style={{ paddingVertical: 0, borderBottomWidth: 1, marginLeft: 5}}
                            value={state}
                            onChangeText={handledPhone}
                            placeholder="Mobile No"
                            keyboardType='phone-pad'
                            underlineColorAndroid={'transparent'}
                            maxLength={10}
                        />
                    </View>
                </View>
                <OtpHeading>We will send you 6 digit OTP</OtpHeading>
                <TouchableOpacity onPress={()=> console.log('hi')} style={{borderRadius: 30, backgroundColor: '#DADDE3', borderColor: 'green', borderWidth: 0, paddingHorizontal: 60, paddingVertical: 20, minWidth: 290, alignItems: 'center' }} >
                    <LetsGoText>Let&apos;s Go</LetsGoText> 
                </TouchableOpacity>
                <OtpInputs
                    handleChange={(code) => console.log(code)}
                    numberOfInputs={6} 
                    autofillFromClipboard={false}   
                    inputContainerStyles={{
                        borderWidth: 1,
                        borderStyle: 'solid',
                        marginHorizontal: 4,
                    }}    
                />
                <ExploreHeading>skip to explore</ExploreHeading>
                <AgreeDescription>i agree to the User agrement and Privacy Policy of BigHit</AgreeDescription>
            </View>
            
        </>
    )
}