import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Image, Input } from 'react-native';

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.boldText}>Aplicativo de câmera{'\n'}</Text>
        <Text style={styles.boldText}>Optativa I: Desenvolvimento Mobile{'\n'}</Text>
        <Text style={styles.boldText}>Aluno: Enzo Araujo de Souza Honorato</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Tirar foto"
          onPress={() => navigation.navigate('Camera')}
          color="#FF9800" // cor laranja
          style={styles.button}
        />
        <Button
          title="Sobre o aplicativo"
          onPress={() => navigation.navigate('Sobre')}
          color="#2196F3" // cor azul
          style={styles.button}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0', // cinza claro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    color: '#333333', // cinza escuro
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
