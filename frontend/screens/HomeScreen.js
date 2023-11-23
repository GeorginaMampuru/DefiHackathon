import React, { useRef, useEffect } from 'react';
import { View, TouchableOpacity, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const animatedValue = useRef(new Animated.Value(0)).current;

  const goToLoginScreen = () => {
    navigation.navigate('LandingPage');
  };

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [animatedValue]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange' }}>
      <TouchableOpacity onPress={goToLoginScreen}>
        <Animated.Image
          source={require('../assets/images/Logo.png')}
          style={{
            width: 300,
            height: 300,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
