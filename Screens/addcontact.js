import React, { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, Text, ScrollView, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
const addcontact = ({ navigation }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [numberArray, setNumberArray] = useState([])
    const [updatedArray, setUpdatedArray] = useState()

    useEffect(() => {
        getSavedData()
    }, [])

    const updateArray = async () => {

        const newData = { name: name, contact_no: number }
        const updateData = [...numberArray, newData]
        setNumberArray(updateData)
        storeInAsync(updateData)
        console.log('====== Data array ====>', name, number)
        if (name == name && contact_no == number) {
            navigation.navigate('Savedata', { name, number })
            setName('')
            setNumber('')
        }
    }

    const storeInAsync = async (updatedData) => {
        try {
            const arr = JSON.stringify(updatedData)
            await AsyncStorage.setItem('@ContactNumbers', arr)
            console.log('Data Stored')
            setName('')
            setNumber('')
        } catch (error) {
            console.log('===== Error ====>', error)
        }
    }

    const getSavedData = async () => {
        const data = await AsyncStorage.getItem('@ContactNumbers')
        const numbersList = JSON.parse(data)
        setNumberArray(numbersList)
        console.log('Numbers List====>', numbersList)
    }

    const deleteNumber = async (ind) => {
        const updatedNumbers = [...numberArray]
        updatedNumbers.splice(ind, 1)
        console.log('========', updatedNumbers)
        setNumberArray(updatedNumbers)
        storeInAsync(updatedNumbers)

    }

    return (

        <ScrollView>
            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginTop: 20 }}> MY Contacts</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput
                    style={{ backgroundColor: '#dde3ed', width: '100%', marginVertical: 30, borderRadius: 100, color: '#000' }}
                    value={name}
                    onChangeText={(t) => setName(t)}
                    placeholder="Name"
                    placeholderTextColor={'#abbad3'}
                />
            </View>
            <View>
                <TextInput
                    style={{ backgroundColor: '#dde3ed', width: '100%', marginVertical: 5, borderRadius: 100, color: "#000" }}
                    value={number}
                    onChangeText={(t) => setNumber(t)}
                    placeholder="Contact Numver"
                    placeholderTextColor={'#abbad3'}
                />
            </View>
            <TouchableOpacity
                onPress={() => updateArray()}
                style={{ padding: 10, alignItems: 'center', marginLeft: 120, borderRadius: 100, width: '35%' }}>
                <Text style={{ color: 'red', fontWeight: 'bold' }}>Save Number</Text>
            </TouchableOpacity>
            {numberArray?.map((item, index) => (
                <View style={{ flexDirection: 'row', width: 350, alignSelf: 'center', marginVertical: 5, paddingVertical: 5, backgroundColor:  '#dde3ed', borderRadius: 20 }}>
                    <Image style={{ margintop: 30, height: 50, width: 50, borderRadius: 300 }} source={require("../assets/images/user.png")} />
                    <View style={{ marginLeft: 5, width: '75%' }}>
                        <Text style={{ fontSize: 20, color: "black" }}>{item?.name}</Text>
                        <Text style={{ fontSize: 17, color: "#67707f" }}>{item?.contact_no}</Text>
                    </View>
                    <TouchableOpacity
                        style={{ width: '10%', borderRadius: 100,marginTop:10 }}
                        onPress={() => deleteNumber(index)}>
                        <Icon name="delete" size={20} color={'#d42620'} marginLeft={5} /></TouchableOpacity>
                </View>
            ))}


        </ScrollView>
    )
}
export default addcontact;