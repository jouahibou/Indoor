import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screen/Home'
import List from './Screen/Carte'
import Indoor from './Screen/Indoor'
import Direction from './Screen/Direction'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bienvenue" component={Home} />
        <Stack.Screen name="Carte" component={List} />
        <Stack.Screen name="Indoor" component={Indoor} />
        <Stack.Screen name="Direction" component={Direction} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


