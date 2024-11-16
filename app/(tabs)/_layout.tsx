import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './index';
import SignupScreen from './two';
import HomeScreen from './three';
import { Ionicons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1E90FF',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: { backgroundColor: '#F4F4F4', borderTopWidth: 0 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => <Ionicons name="log-in" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          tabBarLabel: 'Signup',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-add" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
