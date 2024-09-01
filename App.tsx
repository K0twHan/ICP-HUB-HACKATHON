import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'; // Ana ekran
import IlacSorgulaScreen from './src/screens/IlacSorgulaScreen'; // İlacı Sorgula ekranı
import IlaciTeslimAlScreen from './src/screens/IlaciTeslimAlScreen'; // İlacı Teslim Al ekranı
import IlaciYonetScreen from './src/screens/IlacYonetScreen'; // İlacı Yönet ekranı

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IlacSorgula" component={IlacSorgulaScreen} />
        <Stack.Screen name="IlaciTeslimAl" component={IlaciTeslimAlScreen} />
        <Stack.Screen name="IlaciYonet" component={IlaciYonetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}