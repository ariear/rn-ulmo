import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/views/Home";
import SplashScreen from "./src/views/SplashScreen";
import LivingRoom from "./src/views/LivingRoom";
import Furniture from "./src/views/Furniture";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LivingRoom" component={LivingRoom} />
      <Stack.Screen name="Furniture" component={Furniture} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App