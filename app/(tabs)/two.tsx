import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Banner Image */}
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        }}
        style={styles.bannerImage}
      />
      <Text style={styles.headerText}>Welcome to TRACkiT</Text>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Image
          source={{
            uri: 'https://randomuser.me/api/portraits/men/32.jpg',
          }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@example.com</Text>
        </View>
      </View>

      {/* Upcoming Trip Section */}
      <View style={styles.tripContainer}>
        <Text style={styles.tripTitle}>Upcoming Trip</Text>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1546215364-3bf5c5a32d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
          }}
          style={styles.tripImage}
        />
        <Text style={styles.tripDetails}>Destination: Paris</Text>
        <Text style={styles.tripDetails}>Date: 15th December 2024</Text>
      </View>

      {/* Featured Destinations */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Destinations</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredScroll}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1518378188025-1ca0c61003e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
            }}
            style={styles.featuredImage}
          />
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1518684079-6d3ecb3bc698?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
            }}
            style={styles.featuredImage}
          />
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1541781774459-bb2c41ab1c01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
            }}
            style={styles.featuredImage}
          />
        </ScrollView>
      </View>

      {/* Travel Tips */}
      <View style={styles.tipsContainer}>
        <Text style={styles.sectionTitle}>Travel Tips</Text>
        <Text style={styles.tipText}>• Always pack light for better mobility.</Text>
        <Text style={styles.tipText}>• Stay hydrated during long flights.</Text>
        <Text style={styles.tipText}>• Keep digital copies of important documents.</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PlanTrip')}>
        <Text style={styles.buttonText}>Plan New Trip</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  headerText: {
    fontSize: 26,
    fontFamily: 'Inter-Bold',
    marginVertical: 10,
    color: '#1E90FF',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  profileName: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#777',
  },
  tripContainer: {
    backgroundColor: '#FFF',
    width: '90%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    alignItems: 'center',
  },
  tripTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#333',
    marginBottom: 10,
  },
  tripImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  tripDetails: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#555',
  },
  section: {
    width: '90%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#333',
    marginBottom: 10,
  },
  featuredScroll: {
    flexDirection: 'row',
  },
  featuredImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  tipsContainer: {
    width: '90%',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 20,
  },
  tipText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#555',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#1E90FF',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#FF6347',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Inter-SemiBold',
  },
});
