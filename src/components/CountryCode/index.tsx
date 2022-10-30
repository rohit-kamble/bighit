import React, { useState } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import data from './country-code.json';
import {
    CountryCodeContainer, 
    CountryCodeInput, 
    CountryCodeView, 
    CountryCodeImageContainer,
    CountryCodeImage,
    CountryCodeText
} from './styles';

const countryData = data.map((item)=>{
    return {
        code: item['dial_code'],
        name: item.name,
        flag: `https://flagcdn.com/48x36/${item.code.toLowerCase()}.png`
    }
})

export default function CountryCode({ navigation, handledSearch}: any){
    const [searchValue, setValue] = useState('');
    const [newData, setData] = useState(countryData);
    
    const searchCountry = (event : any)=> {
        const searchData = countryData.filter(item=> item.name.toLowerCase().includes(event.toLowerCase()))
        setValue(event)
        setData(searchData);
    }

    const handleCountryInfo = ({code, flag}: any) => {
        handledSearch({code, flag})
        navigation.navigate('Login');
    }

    return (
        <CountryCodeContainer style={{flex:1, marginHorizontal: 24}}>
            <StatusBar/>
            <CountryCodeText>Select Country</CountryCodeText>
            <CountryCodeInput 
                placeholder="search for country"
                value={searchValue}
                onChangeText={searchCountry}
            />
            <ScrollView>
            {newData && newData.map(({code, flag, name})=>{
                return (
                    <CountryCodeView onPress={()=> handleCountryInfo({code, flag})} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24}} key={name + code}>
                        <CountryCodeImageContainer>
                            <CountryCodeImage source={{uri: flag}} style={{width: 42, height: 28}}/>
                            <CountryCodeText>{name}</CountryCodeText>
                        </CountryCodeImageContainer>
                        <CountryCodeText>{code}</CountryCodeText>
                    </CountryCodeView>
                )
            })}
            </ScrollView>
        </CountryCodeContainer>
    )
}