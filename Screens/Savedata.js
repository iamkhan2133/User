import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View, ScrollView, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/AntDesign";
const Savedata = ({ navigation }) => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [numberArray, setNumberArray] = useState([])
    const [search, setSearch] = useState('')
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
        setName('')
        setNumber('')

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

    const searchContact = () => {
        const fondNumber = numberArray.filter((numberArray) => numberArray.name === search)
        console.log('===== fondNumber ====', fondNumber)
        setUpdatedArray(fondNumber)
        // setNumberArray(fondNumber)
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', alignSelf: 'center' }}> MY Contacts</Text>
                <TouchableOpacity
                    style={{ borderRadius: 100 }}
                    onPress={() => navigation.navigate('myinfo')}>
                    <Image style={{ margintop: 20, height: 45, width: 45, borderRadius: 300 }} source={require("../assets/images/mobile.jpg")} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30, marginBottom: 30, backgroundColor: '#fff', alignSelf: 'center', width: "97%", borderRadius: 20 }}>
                <TouchableOpacity
                    style={{ borderRadius: 50, marginRight: 10, alignItems: 'center', marginTop: 15 }}
                    onPress={() => searchContact()}><Icon name='search1' size={20} color={'black'} />
                </TouchableOpacity>
                <TextInput
                    style={{ backgroundColor: 'white', borderRadius: 20, color: '#000', width: '85%' }}
                    value={search}
                    onChangeText={setSearch}
                    placeholder="Search Number"
                    placeholderTextColor={'grey'} />

            </View>
            {updatedArray?.length > 0 ?
                <View style={{ marginVertical: 40, borderBottomColor: '#fff', borderBottomWidth: 10 }}>
                    <Text style={{ color: "#000" }}>{updatedArray?.lenght} Contacts Found</Text>
                    {updatedArray?.map((item, index) => (
                        <View style={{ flexDirection: 'row', width: 350, alignSelf: 'center', marginVertical: 5, paddingVertical: 5, backgroundColor: '#dde3ed', borderRadius: 20 }}>
                            <TouchableOpacity onPress={()=>navigation.navigate('myinfo',{name,contact_no})}><Image style={{ margintop: 30, height: 50, width: 50, borderRadius: 300 }} source={require("../assets/images/user.png")} /></TouchableOpacity> 
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
                </View> :
                null
            }

            {numberArray?.map((item, index) => (
                <View style={{ flexDirection: 'row', width: 350, alignSelf: 'center', marginVertical: 5, paddingVertical: 5, backgroundColor: '#dde3ed', borderRadius: 20 }}>
                   <TouchableOpacity onPress={()=>navigation.navigate('myinfo',{name,contact_no})}><Image style={{ margintop: 30, height: 50, width: 50, borderRadius: 300 }} source={require("../assets/images/user.png")} /></TouchableOpacity> 
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
            <View style={{ marginLeft: 300, marginTop: 50 }}>
                <TouchableOpacity
                    style={{ width: 100, borderRadius: 100 }}
                    onPress={() => navigation.navigate('addcontact')}>
                    <Image style={{ margintop: 10, height: 50, width: 50, borderRadius: 100 }} source={require("../assets/images/contact.png")} />
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}
export default Savedata;