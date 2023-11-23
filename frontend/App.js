import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './screens/LandingPage';
import BuyPelletsPage from './screens/BuyPelletsPage';
import MyPelletsPage from './screens/MyPelletsPage';
import CheckoutPage from './screens/CheckoutPage'; // Import CheckoutPage component
import HomeScreen from './screens/HomeScreen'; // Import HomeScreen component

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="BuyPelletsPage" component={BuyPelletsPage} />
        <Stack.Screen name="MyPelletsPage" component={MyPelletsPage} />
        <Stack.Screen name="CheckoutPage" component={CheckoutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
