import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';

const MyPelletsPage = () => {
  const navigation = useNavigation();
  const userPellets = [
    { id: 1, name: 'Pellet A', quantity: 10 },
    { id: 2, name: 'Pellet B', quantity: 5 },
    // Add more pellet details as needed
  ];

  const transactionHistory = [
    { id: 1, action: 'Purchase', pellet: 'Pellet A', quantity: 10 },
    { id: 2, action: 'Transfer', pellet: 'Pellet B', quantity: 3, to: 'User XYZ' },
    // Add more transaction details as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pellet Inventory</Text>
      <FlatList
        data={userPellets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemQuantity}>{item.quantity}</Text>
          </View>
        )}
      />

      <Text style={styles.heading}>Transaction History</Text>
      <FlatList
        data={transactionHistory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.transactionItem}>
            {`${item.action} - ${item.pellet} (${item.quantity}) ${item.to ? `to ${item.to}` : ''}`}
          </Text>
        )}
      />
      {/* Additional options/buttons for transferring pellets or viewing details */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 10,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 16,
  },
  transactionItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default MyPelletsPage;
