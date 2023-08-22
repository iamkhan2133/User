import React from 'react';
import { Image, View, ScrollView, Text, TouchableOpacity } from 'react-native';

const myinfo = (route) => {
    const{name,contact_no}=route.params
    return (

        <ScrollView>
            <View style={{ backgroundColor: 'white' }}>
                <Image style={{ marginLeft: 100, marginTop: 30, height: 150, width: 150, borderRadius: 300 }} source={require("../assets/images/user.png")} />
                <Text style={{ marginLeft: 110, fontSize: 25, color: 'black', fontWeight: '200' }}>name:{name}</Text>
                <Text style={{ marginLeft: 110, fontSize: 25, color: 'black', fontWeight: '200' }}>contact_no:{contact_no}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: 'white' }}>
              <TouchableOpacity><Image style={{ width: 30, height: 30, borderRadius: 100 }} source={require("../assets/images/mess.png")} /></TouchableOpacity>
                <TouchableOpacity><Image style={{ width: 30, height: 30, borderRadius: 100 }} source={require("../assets/images/call.png")} /></TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 5 }}>
                <Text style={{ marginTop: 10, fontSize: 10, fontWeight: 'bold', color: 'black', marginTop: 20 }}>Mobile</Text>
            </View>
            <View style={{ paddingHorizontal: 5 }}>
                <Text style={{ fontSize: 10, fontWeight: '400', color: 'black', borderBottomColor: '#fff', borderBottomWidth: 1 }}>+0312345678</Text>
            </View>
            <View style={{ borderBottomColor: '#fff', borderBottomWidth: 1, paddingHorizontal: 5 }} >
                <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'black', marginTop: 20 }}>Email</Text>
                <Text style={{ fontSize: 10, fontWeight: '400', color: 'black' }}>username@gmail.com</Text>
            </View>
            <View style={{ borderBottomColor: '#fff', borderBottomWidth: 1, paddingHorizontal: 5 }}>
                <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'black', marginTop: 20 }}>Group</Text>
                <Text style={{ fontSize: 10, fontWeight: '400', color: 'black' }}>uni friend</Text>
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={{ marginTop: 10, fontSize: 15, fontWeight: 'bold', color: 'black', marginBottom: 10 }}>Account Lincked</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }} >
                    <Text style={{ fontSize: 20, fontWeight: '300', color: 'black' }}>Telegram</Text><Image style={{ width: 30, height: 30 }} source={require("../assets/images/telegram.png")} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: '300', color: 'black' }}>whatsapp</Text><Image style={{ width: 30, height: 30 }} source={require("../assets/images/whatsapp.png")} />
                </View>
                <View style={{ backgroundColor: '#fff' }}>
                    <Text style={{ marginTop: 15, fontSize: 15, fontWeight: 'bold', color: 'black', marginBottom: 10 }}>More Options</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, borderBottomColor: 'black', borderBottomWidth: 1 }}>
                    <Text style={{ fontSize: 20, fontWeight: '300', color: 'black' }}>Share Contact</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }} >
                    <Text style={{ fontSize: 20, fontWeight: '300', color: 'black' }}>QR code</Text>
                </View>
            </View>
        </ScrollView>

    )
}
export default myinfo;