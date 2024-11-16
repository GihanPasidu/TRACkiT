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
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        }}
        style={styles.bannerImage}
      />
      <View style={styles.header}>
        <Text style={styles.htext}>Welcome Back to TRACkiT</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        New to TRACkiT?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.linkText}>Sign Up</Text>
        </TouchableOpacity>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    paddingVertical: 20,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  header: {
    marginVertical: 20,
    alignItems: 'center',
  },
  htext: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#1E90FF',
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    fontSize: 16,
    paddingVertical: 12,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1E90FF',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Inter-SemiBold',
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#555',
    fontFamily: 'Inter-Regular',
  },
  linkText: {
    color: '#1E90FF',
    fontFamily: 'Inter-Bold',
  },
});
