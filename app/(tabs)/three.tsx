import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TRACkiT</Text>
      </View>

      <View style={styles.tripContainer}>
        <Text style={styles.tripText}>Upcoming Trip</Text>
        <Text style={styles.tripDetails}>Destination: Paris</Text>
        <Text style={styles.tripDetails}>Date: 15th December 2024</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Travel History</Text>
        <View style={styles.travelItem}>
          <Text>New York Trip</Text>
          <Text>Completed - $1500</Text>
        </View>
        <View style={styles.travelItem}>
          <Text>Tokyo Adventure</Text>
          <Text>Completed - $2500</Text>
        </View>
        <View style={styles.travelItem}>
          <Text>Beach Vacation</Text>
          <Text>Upcoming - $1200</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PlanTrip')}
      >
        <Text style={styles.buttonText}>Plan New Trip</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ManageProfile')}
      >
        <Text style={styles.buttonText}>Manage Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
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
    marginBottom: 40,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tripContainer: {
    backgroundColor: '#D3D3D3',
    width: '90%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 40,
    borderWidth: 2,
    borderColor: '#333',
  },
  tripText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  tripDetails: {
    fontSize: 18,
    color: '#333',
    marginTop: 10,
  },
  section: {
    width: '90%',
    backgroundColor: '#FFFFC5',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  travelItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  button: {
    backgroundColor: '#87CEFA',
    width: '90%',
    paddingVertical: 15,
    borderRadius: 15,
    marginVertical: 10,
    marginBottom: 40,
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#333',
  },
  logoutButton: {
    backgroundColor: '#FF6347',
    width: '90%',
    paddingVertical: 15,
    borderRadius: 15,
    marginVertical: 10,
    marginTop: 80,
    borderWidth: 2,
    borderColor: '#333',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
});
