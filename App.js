import React from "react";
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./src/views/Home";
import SplashScreen from "./src/views/SplashScreen";
import LivingRoom from "./src/views/LivingRoom";
import Furniture from "./src/views/Furniture";
import Bag from "./src/views/navigations/Bag";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Tab1} />
      <Stack.Screen name="LivingRoom" component={LivingRoom} />
      <Stack.Screen name="Furniture" component={Furniture} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

export function Tab1() {
  return (
      <Tab.Navigator screenOptions={{ 
        tabBarStyle: {
          height: 60,
        },
        tabBarShowLabel: false
       }}>
        <Tab.Screen name="Homescreen" component={Home} options={{
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome5 name="home" size={28} color={focused ? '#212121' : '#BDBDBD'} />
              );
            },
            headerShown: false
          }} />
        <Tab.Screen name="Bag" component={Bag} options={{ 
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome5 name="shopping-bag" size={28} color={focused ? '#212121' : '#BDBDBD'} />
            );
            },
            headerShown: false
         }} />
      </Tab.Navigator>
  );
}