import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Dashboard = ({ navigation }) => {
  const buttons = [
    { name: 'Events', icon: 'calendar', color: '#FF6347', screen: 'EventPage' }, // Tomato
    { name: 'Room Book', icon: 'bed', color: '#4682B4' }, // SteelBlue
    { name: 'Manage Room', icon: 'build', color: '#8A2BE2',screen: '#' }, // BlueViolet
    { name: 'Regular Customers', icon: 'people', color: '#32CD32' }, // LimeGreen
    { name: 'Files', icon: 'document', color: '#FFD700', screen: 'FileManager'}, // Gold
    { name: 'House Keeping', icon: 'home', color: '#FF4500',screen: 'HouseKeepingScreen' }, // OrangeRed
    { name: 'Chats', icon: 'chatbubbles', color: '#1E90FF', screen: 'ChatPage' }, // DodgerBlue
    { name: 'Invoice', icon: 'receipt', color: '#FF1493', screen: 'Invoice' }, // DeepPink
    { name: 'Settings', icon: 'settings', color: '#4B0082' ,screen: '#'}, // Indigo
    { name: 'Order Products', icon: 'cart', color: '#2E8B57',screen: 'StockCheckScreen' }, // SeaGreen
  ];

  return (
    <View style={styles.container} contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={true}>
      <ScrollView>
        <View style={styles.header}>
          <Ionicons name="business" size={40} color="#4B0082" />
          <Text style={styles.hotelName}>Premium Hotel</Text>
        </View>
        <View style={styles.grid}>
          {buttons.map((button, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => navigation.navigate(button.screen)}
            >
              <Ionicons name={button.icon} size={30} color={button.color} />
              <Text style={styles.buttonText}>{button.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9FD',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  hotelName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#4B0082', // Indigo
    fontFamily: 'Roboto_700Bold',
    marginTop: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    margin: 10,
    width: 140, // Fixed width to match old alignment
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#4B0082', // Indigo
    fontFamily: 'Roboto_400Regular',
  },
});

export default Dashboard;
