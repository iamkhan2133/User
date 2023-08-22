import React, { useState } from 'react';
import { View, ImageBackground, TouchableOpacity, TextInput, Text, ScrollView } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
const Signup = ({ navigation }) => {
    const [firstname, setfirstName] = useState('')
    const [secoundname, setsecoundName] = useState('')
    const [Gender, setGender] = useState('')
    const [Birthdate, setBirthdate] = useState('')
    const [Age, setAge] = useState('')
    const [Createpassword, setCreatepassword] = useState('')

    const storeUser = async () => {
        try {
            await AsyncStorage.setItem('@firstnameKey', firstname)
            await AsyncStorage.setItem('@secoundnamekey', secoundname)
            await AsyncStorage.setItem('@Genderkey', Gender)
            await AsyncStorage.setItem('@Birthdatekey', Birthdate)
            await AsyncStorage.setItem('@Agekey', Age)
            await AsyncStorage.setItem('@Createpasswordkey', Createpassword)
            navigation.navigate('Login')
            console.log('=== Data Stored')
        } catch (error) {
            console.log('Error', error)
        }
    }

    return (

        <ScrollView>
            <View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 40, paddingVertical: 50, color: '#5675a6', fontWeight: 'bold' }}>SIGN UP</Text>
                </View>
                <TextInput
                    placeholder='firstname'
                    placeholderTextColor={'#abbad3'}
                    keyboardType='email-address'
                    value={firstname}
                    na
                    onChangeText={(t) => setfirstName(t)}
                    style={{ backgroundColor: '#dde3ed', borderRadius: 20, verticalpadding: 35, fontSize: 20, marginVertical: 10, color: '#fff' }}
                />
                <TextInput
                    placeholder='secoundname'
                    placeholderTextColor={'#abbad3'}
                    keyboardType='ascii-capable'
                    value={secoundname}
                    onChangeText={(t) => setsecoundName(t)}
                    style={{ backgroundColor: '#dde3ed', borderRadius: 20, verticalpadding: 35, fontSize: 20, marginVertical: 10, color: '#fff' }}
                />
                <TextInput
                    placeholder='Gender'
                    placeholderTextColor={'#abbad3'}
                    keyboardType="default"
                    value={Gender}
                    onChangeText={(t) => setGender(t)}
                    style={{ backgroundColor: '#dde3ed', borderRadius: 20, verticalpadding: 35, fontSize: 20, marginVertical: 10, color: '#fff' }}
                />
                <TextInput
                    placeholder='Birthdate'
                    placeholderTextColor={'#abbad3'}
                    keyboardType="decimal-pad"
                    value={Birthdate}
                    onChangeText={(t) => setBirthdate(t)}
                    style={{ backgroundColor: '#dde3ed', borderRadius: 20, verticalpadding: 35, fontSize: 20, marginVertical: 10, color: '#fff' }}
                />
                <TextInput
                    placeholder='Age'
                    placeholderTextColor={'#abbad3'}
                    keyboardType="decimal-pad"
                    value={Age}
                    onChangeText={(t) => setAge(t)}
                    style={{ backgroundColor: '#dde3ed', borderRadius: 20, verticalpadding: 35, fontSize: 20, marginVertical: 10, color: '#fff' }}
                />
                <TextInput
                    placeholder='Createpassword'
                    placeholderTextColor={'#abbad3'}
                    keyboardType="decimal-pad"
                    value={Createpassword}
                    secureTextEntry={true}
                    onChangeText={(t) => setCreatepassword(t)}
                    style={{ backgroundColor: '#dde3ed', borderRadius: 20, verticalpadding: 35, fontSize: 20, marginVertical: 10, color: '#fff' }}
                />
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
                <TouchableOpacity
                    onPress={() => storeUser()}
                    style={{
                        backgroundColor: '#5675a6',
                        borderRadius: 100,
                        alignItems: 'center',
                        width: 100,
                        paddingVertical: 15,
                        marginVertical: 30
                    }}>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 700 }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>


    );
};
export default Signup;
