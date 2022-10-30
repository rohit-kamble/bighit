import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Image, ScrollView,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import data from './country-code.json';

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
        console.log('event==', event);
        const searchData = countryData.filter(item=> item.name.toLowerCase().includes(event.toLowerCase()))
        console.log('searchData', searchData);
        setValue(event)
        setData(searchData);
    }

    const handleCountryInfo = ({code, flag}: any) => {
        handledSearch({code, flag})
        navigation.navigate('Login');
    }

    return (
        <View style={{flex:1, marginHorizontal: 24}}>
            <StatusBar/>
            <TextInput 
             style={{ paddingVertical: 0, borderBottomWidth: 1, marginLeft: 5, marginBottom: 24}}
             placeholder="search for country"
             value={searchValue}
             onChangeText={searchCountry}
            />
            <ScrollView>
            {newData && newData.map(({code, flag, name})=>{
                return (
                    <TouchableOpacity onPress={()=> handleCountryInfo({code, flag})} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24}} key={name + code}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Image source={{uri: flag}} style={{width: 42, height: 28}}/>
                            <Text>{name}</Text>
                        </View>
                        <Text>{code}</Text>
                    </TouchableOpacity>
                )
            })}
            </ScrollView>
        </View>
    )
}