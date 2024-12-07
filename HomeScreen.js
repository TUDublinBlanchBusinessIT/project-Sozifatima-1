import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [selectedService, setSelectedService] = useState('');
  const [cheapestOptions, setCheapestOptions] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [deliveryOptionsVisible, setDeliveryOptionsVisible] = useState(false);

  // Handle service selection
  const handleSelectService = (service) => {
    setSelectedService(service);
    // Define options for the cheapest delivery prices based on the selected service
    const options = {
      Deliveroo: ['Delivery Fee - €2.50'],
      'Just Eats': ['Delivery Fee - €4.00'],
      'Uber Eats': ['Delivery Fee - €6.00'],
    };

    // Set the cheapest options for the selected service
    setCheapestOptions(options[service] || []);
    // Navigate to the Discount page when service is selected
    navigation.navigate('Discounts');
  };

  // Handle Eircode change
  const handleEircodeChange = (text) => {
    setSearchText(text);
    // Show delivery options when Eircode is entered
    if (text.length > 0) {
      setDeliveryOptionsVisible(true);
    } else {
      setDeliveryOptionsVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Enter Your Eircode"
        value={searchText}
        onChangeText={handleEircodeChange}
      />

      {/* Delivery Options */}
      {deliveryOptionsVisible && (
        <ScrollView style={styles.deliveryOptions}>
          <TouchableOpacity
            style={styles.deliveryItem}
            onPress={() => handleSelectService('Deliveroo')}
          >
            <Text style={styles.deliveryText}>Deliveroo - 20 minutes - €2.50</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deliveryItem}
            onPress={() => handleSelectService('Uber Eats')}
          >
            <Text style={styles.deliveryText}>Uber Eats - 25 minutes - €4.00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deliveryItem}
            onPress={() => handleSelectService('Just Eats')}
          >
            <Text style={styles.deliveryText}>Just Eats - 45 minutes - €6.00</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* Confirm Delivery Button */}
      <TouchableOpacity
        style={styles.deliverButton}
        onPress={() => navigation.navigate('Discounts')} // Navigate to Discounts screen
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
  deliveryOptions: {
    marginBottom: 20,
  },
  deliveryItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  deliveryText: {
    fontSize: 16,
    color: '#333',
  },
  deliverButton: {
    padding: 15,
    backgroundColor: '#ff914d',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  deliverButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
