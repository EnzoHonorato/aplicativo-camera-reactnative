import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Image, Input } from 'react-native';

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function SobreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Este aplicativo utiliza a câmera do celular para capturar fotos. Após uma foto ser capturada, o usuário pode escolher descartá-la ou salvá-la no armazenamento local do dispositivo. As fotos são normalmente salvas na mesma pasta onde as fotos tiradas pelo aplicativo nativo de câmera do celular são salvas. As fotos podem ser capturadas utilizando a câmera traseira ou frontal, a depender da escolha do usuário que pode usar o botão "Alterar câmera". Para que o aplicativo funcione corretamente, é necessária a permissão do usuário para o uso da câmera e do armazenamento do dispositivo.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default SobreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // cinza claro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    color: '#333333', // cinza escuro
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
