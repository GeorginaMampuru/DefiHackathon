import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image, SafeAreaView, TextInput,} from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';

const LandingPage = () => {
  const navigation = useNavigation();
  
  const handleStartBuyingPellets = () => {
    console.log('Start buying pellets');
    // Add navigation logic or any further actions here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Pellet Purchase App</Text>
      <Text style={styles.description}>Buy high-quality pellets for your cookstoves!</Text>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.navItem} onPress={()=> navigation.push('BuyPelletsPage')}>
          <Text style={styles.navText}>Buy Pellets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}  onPress={()=> navigation.push('MyPelletsPage')}>
          <Text style={styles.navText}>My Pellets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={()=> navigation.push('CheckoutPage')}> 
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.startButton} onPress={handleStartBuyingPellets}>
        <Text style={styles.startButtonText}>Start Buying Pellets</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  nav: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  navItem: {
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000000',
  },
  navText: {
    fontSize: 16,
  },
  startButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
  },
  startButtonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LandingPage;
