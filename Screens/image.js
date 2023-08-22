import React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const CameraComponent = () => {
  const [capturedImage, setCapturedImage] = useState(null);

  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
    };

    launchCamera(options, (res) => {
      console.log('Response = ', res);
      // if (res.didCancel) {
      //   console.log('User cancelled image picker');
      // } else if (res.error) {
      //   console.log('ImagePicker Error: ', res.error);
      // } else if (res.customButton) {
      //   console.log('User tapped custom button: ', res.customButton);
      //   alert(res.customButton);
      // } else {
      //   const source = { uri: res.uri };
      //   console.log('response', JSON.stringify(res));
      //   set({
      //     filePath: res,
      //     fileData: res.data,
      //     fileUri: res.uri
      //   });
      // }
    });
  };

  return (
    <View style={styles.container}>
      {capturedImage && <Image source={{ uri: capturedImage }} style={styles.image} />}
      <Button title="Open Camera" onPress={openCamera} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default CameraComponent;