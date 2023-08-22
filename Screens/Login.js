import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Alert } from "react-native";
const Login = ({ navigation }) => {
  const [username, setuserName] = useState('')
  const [password, setpassword] = useState('')
  const checkUser = async () => {
    try {
      const name = await AsyncStorage.getItem('@firstnameKey')
      const pass = await AsyncStorage.getItem('@Createpasswordkey')
      const firstname = await AsyncStorage.getItem('@firstnameKey')
      const secoundname = await AsyncStorage.getItem('@secoundnamekey')
      const Gender = await AsyncStorage.getItem('@Genderkey')
      const Birthdate = await AsyncStorage.getItem('@Birthdatekey')
      const Age = await AsyncStorage.getItem('@Agekey')
      const Createpassword = await AsyncStorage.getItem('@Createpasswordkey')
      if (username == name && password == pass) {
        navigation.navigate('Home', { username, password, firstname, secoundname, Gender, Age, Birthdate, Createpassword })
        setuserName('')
        setpassword('')
      } else {
        Alert.alert('Wrorng username or password')
      }
    } catch (error) {
      console.log('Error', error)
    }

  }


  return (

    <View style={{ marginHorizontal: 20, marginVertical: 20, flex: 1, justifyContent: 'space-evenly' }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 30, color: '#5675a6', fontWeight: 'bold', marginTop: 30 }} >HELLO EVERYONE</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <TextInput
          placeholder='Enter your username'
          placeholderTextColor={'#abbad3'}
          keyboardType='email-address'
          value={username}
          onChangeText={(t) => setuserName(t)}
          style={{ backgroundColor: '#dde3ed', paddingHorizontal: 10, borderRadius: 40, marginVertical: 10, fontSize: 17, color: '#000' }}
        />
        <TextInput
          placeholder='Enter your password'
          placeholderTextColor={'#abbad3'}
          keyboardType="numeric"
          value={password}
          onChangeText={(t) => setpassword(t)}
          style={{ backgroundColor: '#dde3ed', borderRadius: 40, paddingHorizontal: 10, verticalpadding: 20, marginVertical: 10, fontSize: 17, color: '#000' }}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => checkUser()}
          style={{
            backgroundColor: '#5675a6',
            borderRadius: 100,
            alignItems: 'center',
            width: '70%',
            paddingVertical: 5,
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'center'
          }}>
          <Text style={{ color: '#fff', fontSize: 20 }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={{
            backgroundColor: '#5675a6',
            borderRadius: 100,
            alignItems: 'center',
            width: '70%',
            paddingVertical: 5,
            marginVertical: 10
          }}>
          <Text style={{ color: '#fff', fontSize: 20 }}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>


  );
};

export default Login;