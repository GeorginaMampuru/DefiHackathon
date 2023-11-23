import React, { useState } from 'react';
import { View, Text, TextInput, Picker, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const CheckoutPage = () => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1); // State for pellet quantity
  const [paymentMethod, setPaymentMethod] = useState(''); // State for payment method

  // Function to handle changes in quantity
  const handleQuantityChange = (value) => {
    const newQuantity = parseInt(value, 10);
    setQuantity(newQuantity);
  };

  // Function to handle changes in payment method
  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  // Function to handle purchase and generate pellet tokens (dummy function for demonstration)
  const handlePurchase = () => {
    // Logic for generating pellet tokens upon successful purchase
    const tokens = generatePelletTokens(quantity);
    console.log('Pellet tokens generated:', tokens);
    // You can perform further actions with the generated tokens (store in state, database, etc.)
    Alert.alert('Purchase Successful', `${quantity} pellets bought`);
  };

  // Dummy function to generate pellet tokens based on quantity
  const generatePelletTokens = (quantity) => {
    // Generate tokens based on the quantity purchased (simulated data)
    const tokens = [];
    for (let i = 0; i < quantity; i++) {
      const token = `PelletToken-${i + 1}`;
      tokens.push(token);
    }
    return tokens;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Checkout</Text>
      <View style={styles.inputContainer}>
        <Text>Quantity:</Text>
        <TextInput
          style={styles.input}
          value={quantity.toString()}
          onChangeText={handleQuantityChange}
          keyboardType="numeric"
          min={1}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Payment Method:</Text>
        <Picker
          selectedValue={paymentMethod}
          style={styles.picker}
          onValueChange={handlePaymentMethodChange}
        >
          <Picker.Item label="Select Payment Method" value="" />
          <Picker.Item label="Credit Card" value="creditCard" />
          <Picker.Item label="Cryptocurrency" value="crypto" />
          {/* Add more payment methods if needed */}
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePurchase}>
        <Text style={styles.buttonText}>Purchase</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#cccccc',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CheckoutPage;
