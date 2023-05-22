import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Image, Input, TouchableOpacity } from 'react-native';

import * as React from 'react';
import { View, Text, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Camera, CameraType } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons'

import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

function CameraScreen({ navigation }) {
  const camRef = useRef(null);
  const [type, setType] = useState(CameraType.back);

  const [hasPermission, setHasPermission] = useState(null);


  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status == 'granted');
    })();

    (async () => {
      const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
      setHasPermission(status == 'granted');
    })();

  }, [])

  if (hasPermission == null) {
    return <View />
  }

  if (hasPermission == false) {
    return <Text>Acesso negado ao hardware!</Text>
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
      console.log(data);
    }
  }

  async function savePicture() {
    const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
    .then(() => {
      alert('Salvo com sucesso!')
    })
    .catch(error => {
      console.log('err', error)
    })
  }

  return (
    <SafeAreaView style={styles.container}>


      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={camRef}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 20,
              left: 20,
            }}
            onPress={toggleCameraType}>
            <Text style={{ fontSize: 20, marginBottom: 13, color: '#FFF' }}>Alterar câmera</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <FontAwesome name="camera" size={23} color="#FFF" />
      </TouchableOpacity>

      {capturedPhoto &&
        <Modal
          animationType='slide'
          transparent={false}
          visible={open}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>

            <View style={{ margin: 10, flexDirection: 'row' }}>
              <TouchableOpacity style={{ margin: 10 }} onPress={() => setOpen(false)}>
                <FontAwesome name="window-close" size={50} color="#FF2000" />
              </TouchableOpacity>

              <TouchableOpacity style={{ margin: 10 }} onPress={savePicture}>
                <FontAwesome name="save" size={50} color="#121212" />
              </TouchableOpacity>
            </View>

            <Image
              style={{ width: '100%', height: 450, borderRadius: 20 }}
              source={{ uri: capturedPhoto }}
            />

          </View>
        </Modal>
      }

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    margin: 20,
    borderRadius: 10,
    height: 50,

  }

});