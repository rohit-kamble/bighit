import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import * as Notifications from 'expo-notifications';
import { WelcomeHeading, OtpHeading, ExploreHeading, AgreeDescription, LetsGoText } from './styles';
import OtpInputs from 'react-native-otp-inputs';
import LottieView from 'lottie-react-native';

const schedulePushNotification = async () =>{
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "otp",
        body: '935379'
      },
      trigger: { seconds: 2 },
    });
}



export default function LoginButton({navigation, countryInfo}: any){
    const [state, setState] = useState<string>('');
    const [enabled, setEnabled] = useState<boolean>(false);
    const [mobile, setValidation] = useState(false);
    const [otp, setOtp] = useState<string>('');
    const [notification, setNotification] = useState<any>(false);
    const [loginView, setLoginView] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);
    const notificationListener: any = useRef();

    useEffect(() => {
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
        });
        return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        };
    }, []);

    useEffect(()=>{
        if(loginView) {
            setTimeout(()=> {setLoading(true);  setTimeout(()=> navigation.navigate('Home'), 800)}, 2000)
        }
    }, [loginView])

    const handledPhone = (event: any) => {
        setEnabled(event.length === 10);
        setState(event)
    }
    const hendledOtp = (code) => {
        setOtp(code)
    }

    return(
        <>
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginBottom: 20, backgroundColor: 'white'}}>
                {!loginView ?<>
                    <WelcomeHeading>Welcome to <Text style={{fontWeight: '900'}}>BigHit!</Text></WelcomeHeading>
                {!mobile && <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('CountryCode')} style={{minWidth: '20%', marginRight: 10, display: 'flex', flexDirection: 'row', alignItems: 'center',borderBottomWidth: 1, marginTop: 5, paddingBottom: 5}}>
                        <Image source={{uri: countryInfo.flag}} style={{width: 26, height: 20, marginRight: 8}}/>
                        <Text>{countryInfo.code}</Text>
                    </TouchableOpacity>
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
                }
                {mobile && 
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <Text>{state}</Text> 
                        <TouchableOpacity onPress={()=> {setValidation(false)} }>
                            <Text style={{color: 'blue', fontWeight: '900'}}>Change</Text>
                        </TouchableOpacity>
                    </View>
                }
                {mobile &&
                <OtpInputs
                    handleChange={hendledOtp}
                    numberOfInputs={6} 
                    autofillFromClipboard={false}   
                    inputContainerStyles={{
                        borderWidth: 1,
                        borderStyle: 'solid',
                        marginHorizontal: 4,
                        borderColor: '935379' === otp ? 'blue' : 'orange'
                    }}    
                />
                }
                <OtpHeading>We will send you 6 digit OTP</OtpHeading>
                <TouchableOpacity onPress={async () =>{  
                    enabled && setValidation(true); 
                    await schedulePushNotification();
                    if(notification && notification.request.content.body === otp){
                        setLoginView(true)
                    }
                    }}  style={{borderRadius: 30, backgroundColor: enabled? 'black':'#DADDE3', borderColor: 'green', borderWidth: 0, paddingHorizontal: 60, paddingVertical: 20, minWidth: 290, alignItems: 'center' }} >
                    <LetsGoText>{!mobile ? `Let's Go`: 'submit'  }</LetsGoText> 
                </TouchableOpacity>
                <ExploreHeading>skip to explore</ExploreHeading>
                <AgreeDescription>i agree to the User agrement and Privacy Policy of BigHit</AgreeDescription>
                </> : <>
                {loading?<View>
                    <Text>{'Login Success'}</Text> 
                 <LottieView
                    autoPlay
                    style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#eee',
                    }}
                    source={require('../../assets/animated-images/95029-success.json')}
                /> 
                </View>
                : 
                <LottieView
                    autoPlay
                    style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#eee',
                    }}
                    source={require('../../assets/animated-images/lf30_editor_qfhlc5be.json')}
                />
                }
                
                </>}
                

            </View>
            
        </>
    )
}