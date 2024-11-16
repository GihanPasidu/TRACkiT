import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function LoginScreen() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    navigation.navigate('Home');

    setEmail('');
    setPassword('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.htext1}>wecome to</Text>
        <Text style={styles.htext2}>TRACkiT</Text>
      </View>

      <Image
          source={require('../../assets/images/trackit.png')}
          style={styles.appIcon}
        />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.newToTrackit}>
        New to TrackIt?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    paddingVertical: 60,
  },
  header: {
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  appIcon: {
    width: '69%',
    height: '41%',
    marginBottom: 20,
  },
  htext1: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  htext2: {
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#F1F1F1',
    textAlign: 'center',
    width: '80%',
    fontSize: 18,
    paddingVertical: 12,
    marginVertical: 10,
    marginBottom: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#333',
  },
  button: {
    backgroundColor: '#87CEFA',
    width: '50%',
    paddingVertical: 15,
    borderRadius: 15,
    marginVertical: 10,
    marginTop: 30,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#333',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
  newToTrackit: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 15,
  },
  signUpText: {
    color: '#87CEFA',
    fontWeight: 'bold',
  },
});
