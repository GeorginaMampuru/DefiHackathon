import React, { useState } from 'react';
import { View, Text, Image, TextInput, Picker, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'



const BuyPelletsPage = () => {

  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [pellets] = useState([
    {
      id: 1,
      name: 'Pellet A',
      description: 'High-quality pellet for cooking',
      pricePerPellet: 2, // Change this to the actual price per pellet
      // image: require('./pellet_a_image_url.jpg'), // Replace with the actual image URL
    },
    // Add more pellet options as needed
  ]);

  const handleQuantityChange = (value) => {
    const newQuantity = parseInt(value, 10);
    setQuantity(newQuantity);
  };

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handlePurchase = () => {
    if (paymentMethod === 'crypto' || paymentMethod === 'traditional') {
      const tokens = generatePelletTokens(quantity);
      console.log('Pellet tokens generated:', tokens);
      // Further actions with the generated tokens (simulated in this example)
      Alert.alert(`Purchase successful! ${quantity} pellets bought.`);
    } else {
      Alert.alert('Please select a payment method.');
    }
  };

  const generatePelletTokens = (quantity) => {
    // Simulated token generation based on quantity purchased
    const tokens = [];
    for (let i = 0; i < quantity; i++) {
      const token = `PelletToken-${i + 1}`;
      tokens.push(token);
    }
    return tokens;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Available Pellet Options</Text>
      <View style={styles.pelletOptions}>
        {pellets.map((pellet) => (
          <View key={pellet.id} style={styles.pellet}>
            <Image source={pellet.image} style={styles.image} />
            <Text>{pellet.name}</Text>
            <Text>{pellet.description}</Text>
            <Text>Price per pellet: ${pellet.pricePerPellet}</Text>
          </View>
        ))}
      </View>

      <View style={styles.quantityInput}>
        <Text>Quantity:</Text>
        <TextInput
          style={styles.input}
          value={quantity.toString()}
          onChangeText={handleQuantityChange}
          keyboardType="numeric"
          min={1}
        />
      </View>

      <View style={styles.paymentOptions}>
        <Text>Select payment method:</Text>
        <Picker
          selectedValue={paymentMethod}
          style={styles.picker}
          onValueChange={handlePaymentMethodChange}
        >
          <Picker.Item label="Select Payment Method" value="" />
          <Picker.Item label="Cryptocurrency" value="crypto" />
          <Picker.Item label="Traditional" value="traditional" />
        </Picker>
        <Button title="Purchase" onPress={handlePurchase} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pelletOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  pellet: {
    width: '45%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 5,
  },
  quantityInput: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
  },
  paymentOptions: {
    marginBottom: 20,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
};

export default BuyPelletsPage;
