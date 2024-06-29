import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './src/components/Dashboard';
import EventPage from './src/components/EventPage';
import ChatPage from './src/components/ChatPage';
import Invoice from './src/components/Invoice'; 
import FileManager from './src/components/FileManager';
import HouseKeepingInfoScreen from './src/components/HouseKeepingInfoScreen';
import HouseKeepingScreen from './src/components/HouseKeepingScreen';
import LaundryPage from './src/components/LaundryPage';
import OrderDetailScreen from './src/components/OrderDetailScreen';
import OrderProductScreen from './src/components/OrderProductScreen';
import StockCheckScreen from './src/components/StockCheckScreen';
 // Import Invoice component

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="EventPage" component={EventPage} />
        <Stack.Screen name="ChatPage" component={ChatPage} />
        <Stack.Screen name="Invoice" component={Invoice} />
        <Stack.Screen name="FileManager" component={FileManager} />
        <Stack.Screen name="HouseKeepingInfoScreen" component={HouseKeepingInfoScreen} />
        <Stack.Screen name="HouseKeepingScreen" component={HouseKeepingScreen} />
        <Stack.Screen name="LaundryPage" component={LaundryPage} />
        <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} />
        <Stack.Screen name="OrderProductScreen" component={OrderProductScreen} />
        <Stack.Screen name="StockCheckScreen" component={StockCheckScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}