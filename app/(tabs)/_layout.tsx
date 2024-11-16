import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './index';
import SignupScreen from './two';
import HomeScreen from './three';

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#333',
        tabBarStyle: { backgroundColor: '#FFFFC5', borderTopWidth: 0 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarStyle: { display: 'none' },
        }}
      />
      
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Login',
          tabBarStyle: { display: 'none' },
        }}
      />
      
      <Tab.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          tabBarLabel: 'Signup',
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tab.Navigator>
  );
}
