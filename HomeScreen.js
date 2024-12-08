import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [selectedService, setSelectedService] = useState('');
  const [cheapestOptions, setCheapestOptions] = useState([]);
  const [eircode, setEircode] = useState('');

  const handleSelectService = (service) => {
    setSelectedService(service);

    // Define the options for the cheapest items, including price and time
    const options = {
      Deliveroo: { price: '€2.50', time: '20 minutes' },
      'Just Eats': { price: '€4.00', time: '45 minutes' },
      'Uber Eats': { price: '€6.00', time: '25 minutes' },
    };

    // Set the cheapest options for the selected service
    setCheapestOptions(options[service] || []);
  };

  // Function to handle the Eircode input
  const handleEircodeChange = (text) => {
    setEircode(text);
  };

  // Only show delivery options when Eircode has 7 characters
  const renderDeliveryOptions = () => {
    if (eircode.length === 7) {
      return (
        <>
          <TouchableOpacity
            style={[styles.serviceItem, selectedService === 'Deliveroo' && styles.selectedService]}
            onPress={() => {
              handleSelectService('Deliveroo');
              navigation.navigate('Discounts'); // Navigate to Discount page
            }}
          >
            <Text style={styles.serviceText}>Deliveroo</Text>
            <Text style={styles.serviceDetails}>Price: €2.50</Text>
            <Text style={styles.serviceTime}>Time: 20 minutes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.serviceItem, selectedService === 'Just Eats' && styles.selectedService]}
            onPress={() => {
              handleSelectService('Just Eats');
              navigation.navigate('Discounts'); // Navigate to Discount page
            }}
          >
            <Text style={styles.serviceText}>Just Eats</Text>
            <Text style={styles.serviceDetails}>Price: €4.00</Text>
            <Text style={styles.serviceTime}>Time: 45 minutes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.serviceItem, selectedService === 'Uber Eats' && styles.selectedService]}
            onPress={() => {
              handleSelectService('Uber Eats');
              navigation.navigate('Discounts'); // Navigate to Discount page
            }}
          >
            <Text style={styles.serviceText}>Uber Eats</Text>
            <Text style={styles.serviceDetails}>Price: €6.00</Text>
            <Text style={styles.serviceTime}>Time: 25 minutes</Text>
          </TouchableOpacity>
        </>
      );
    }
    return null; // If Eircode doesn't have 7 characters, return nothing
  };

  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.navItem} onPress={() => navigation.navigate('Discounts')}>Discount</Text>
        <Text style={styles.navItem}>Profile</Text>
      </View>

      {/* Eircode Input */}
      <TextInput
        style={styles.searchBar}
        placeholder="Enter Your Address or Eircode"
        placeholderTextColor="#aaa"
        value={eircode}
        onChangeText={handleEircodeChange}
        maxLength={7} // Limit input to 7 characters
      />

      {/* Display Delivery Options only when Eircode is 7 characters */}
      <ScrollView>
        {renderDeliveryOptions()}
      </ScrollView>

      {/* Deliver Button */}
      <TouchableOpacity
        style={styles.deliverButton}
        onPress={() => {
          alert('Delivery on its way!');
          navigation.navigate('Home'); // Go back to the Home page after delivery
        }}
      >
        <Text style={styles.deliverButtonText}>Confirm Delivery</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f8fa',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  navItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  searchBar: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  serviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  selectedService: {
    borderColor: '#ff914d',
    borderWidth: 2,
  },
  serviceText: {
    fontSize: 16,
    color: '#333',
  },
  serviceDetails: {
    fontSize: 14,
    color: '#888',
  },
  serviceTime: {
    fontSize: 14,
    color: '#888',
  },
  deliverButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#ff914d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#ff914d',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  deliverButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
