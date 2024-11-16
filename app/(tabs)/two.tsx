import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function SignupScreen() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    navigation.navigate('Home');

    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.htext}>Create TRACkiT Account</Text>
      </View>

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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.newToTrackit}>
        Already have an account?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signUpText}>Log In</Text>
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
    paddingVertical: 80,
  },
  header: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 80,
    alignItems: 'center',
  },
  htext: {
    fontSize: 30,
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
    marginBottom: 100,
    marginTop: 80,
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
