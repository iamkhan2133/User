
import React, { useEffect, useState } from "react";
import { ImageBackground, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
const Home = ({ navigation, route }) => {

  const { firstname, secoundname, Gender, Age, Birthdate, Createpassword } = route.params
  const [resourcePath, setresourcePath] = useState('')
  const width = Dimensions.get('window').width

  const selectFile = () => {
    var options = {

      title: 'choose image',
      customButtons:
      {
        name: 'customOptionKey',
        title: 'Choose file from Custom Option'
      },

      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error; ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button;', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        setresourcePath(source.assets[0]);
      }
    });
  };

  return (
    <>

      <ScrollView>
        <View style={{ flex: 1, alignItems: "center", marginVertical: 50, backgroundColor: '#5675a6', borderRadius: 300, padding: 34 }}>
          <Text style={{ fontSize: 20, fontWeight: '100', color: 'white', borderRadius: 20, marginVertical: 10, paddingHorizontal: 10 }}>firstname:{firstname}</Text>
          <Text style={{ fontSize: 20, fontWeight: '100', color: 'white', borderRadius: 20, marginVertical: 10, paddingHorizontal: 10 }}>secoundname:{secoundname}</Text>
          <Text style={{ fontSize: 20, fontWeight: '100', color: 'white', borderRadius: 20, marginVertical: 10, paddingHorizontal: 10 }}>Gender:{Gender}</Text>
          <Text style={{ fontSize: 20, fontWeight: '100', color: 'white', borderRadius: 20, marginVertical: 10, paddingHorizontal: 10 }}>Birthdate: {Birthdate}</Text>
          <Text style={{ fontSize: 20, fontWeight: '100', color: 'white', borderRadius: 20, marginVertical: 10, paddingHorizontal: 10 }}>Age: {Age}</Text>
          <Text style={{ fontSize: 20, fontWeight: '100', color: 'white', borderRadius: 20, marginVertical: 10, paddingHorizontal: 10 }}>Createpassword:{Createpassword}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            onPress={() => selectFile()}
            style={{
              backgroundColor: '#5675a6',
              borderRadius: 100,
              alignItems: 'center',
              width: '30%',
              paddingVertical: 50,
              marginLeft: 10
            }}>
            <Text style={{ color: '#fff', fontSize: 10, fontWeight: 100 }}>choose image</Text>
          </TouchableOpacity>
          {console.log('==== test ====>', resourcePath.uri)}
          <TouchableOpacity
            onPress={() => navigation.navigate('image')}
            style={{
              backgroundColor: '#5675a6',
              borderRadius: 100,
              alignItems: 'center',
              width: '30%',
              paddingVertical: 50,
              marginRight: 10
            }}>
            <Text style={{ color: '#fff', fontSize: 10, fontWeight: "100" }}>cepture pic</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Image source={{ uri: resourcePath.uri }} style={{ width: width, height: 200 }} resizeMode="repeat" />

    </>
  )
}

export default Home;