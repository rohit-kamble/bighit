import React, { useState, useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';
import { 
    WelcomeHeading, 
    OtpHeading, 
    ExploreHeading, 
    AgreeDescription, 
    LetsGoText, 
    LoginAndSubmitButton, 
    LoginButtonContainer
} from './styles';
import OtpInputs from 'react-native-otp-inputs';
import MobileInput from '../MobileInput';
import ChangeMobile from '../ChangeMobile';
import AnimatedIcon from '../AnimateIcon';

const schedulePushNotification = async () =>{
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "BigHit otp",
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

    const handledPhone = (event: string) => {
        const valid = event.length === 10 && event === '9990177856'
        setEnabled(valid);
        setState(event)
    }
    const hendledOtp = (code) => {
        setOtp(code)
    }

    const changeMobileNo = () => {
        setValidation(false)
    }

    const loginAndSubmit = async () => {
        enabled && setValidation(true); 
        await schedulePushNotification();
        if(notification && notification.request.content.body === otp){
            setLoginView(true)
        }
    }

    const message = (state === "" || state === "9990177856" )? 'We will send you 6 digit OTP': 'Please Enter valid Phone number'; 

    return(
        <LoginButtonContainer>
            {!loginView ?
                <>
                    {!mobile ? 
                        <WelcomeHeading>Welcome to <WelcomeHeading isBold={true}>BigHit!</WelcomeHeading></WelcomeHeading>
                        : <WelcomeHeading isBold={true}>Enter 6 digit OTP sent on</WelcomeHeading>
                    }
                    {!mobile && <MobileInput {...{flag: countryInfo.flag, navigation, code: countryInfo.code, handledPhone, state}}/>}
                    {mobile && <ChangeMobile {...{state, changeMobileNo, code: countryInfo.code }}/>}
                    {mobile &&
                        <OtpInputs
                            handleChange={hendledOtp}
                            numberOfInputs={6} 
                            autofillFromClipboard={false}   
                            inputStyles={{textAlign: 'center', height: 52, width: 40}}
                            inputContainerStyles={{
                                borderWidth: 1,
                                borderStyle: 'solid',
                                marginHorizontal: 4,
                                backgroundColor: '#E2E2E2',
                                borderRadius: 8,
                                borderColor: '935379' === otp ? '#0062FF' : '#EA4A04'
                            }}    
                        />
                    }
                    {!mobile && <OtpHeading isValid={(state === "" || state === "9990177856" )}>{message}</OtpHeading>}
                    <LoginAndSubmitButton onPress={loginAndSubmit} enabled={enabled} disabled={!enabled}>
                        <LetsGoText>{!mobile ? `Let's Go`: 'submit'  }</LetsGoText> 
                    </LoginAndSubmitButton>
                    {mobile ? <ExploreHeading isOtpColor={true}>Resend OTP 30s</ExploreHeading> : <ExploreHeading>skip to explore</ExploreHeading>}
                    <AgreeDescription>i agree to the User agrement and Privacy Policy of BigHit</AgreeDescription>
                </>
                : 
                <AnimatedIcon isLoading={loading}/>
            }
        </LoginButtonContainer>

    )
}