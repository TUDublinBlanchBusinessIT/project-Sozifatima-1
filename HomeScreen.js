import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [selectedService, setSelectedService] = useState('');
  const [cheapestOptions, setCheapestOptions] = useState([]);

  const handleSelectService = (service) => {
    setSelectedService(service);

    // Define the options for the cheapest items
    const options = {
      Deliveroo: ['Delivery Fee - €2.50'],
      'Just Eats': ['Delivery Fee - €4.00 '],
      'Uber Eats': ['Delivery Fee - €6.00'],
    };

    // Set the cheapest options for the selected service
    setCheapestOptions(options[service] || []);

    // Automatically navigate to the Discounts screen after selection
    navigation.navigate('Discounts');
  };

  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.navItem} onPress={() => navigation.navigate('Discounts')}>Discount</Text>
        <Text style={styles.navItem}>Profile</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Enter Your Address or Eircode"
        placeholderTextColor="#aaa"
      />

      {/* Delivery Services */}
      <ScrollView>
        <TouchableOpacity
          style={[
            styles.serviceItem,
            selectedService === 'Deliveroo' && styles.selectedService,
          ]}
          onPress={() => handleSelectService('Deliveroo')}
        >
          <Text style={styles.serviceText}>
            {selectedService === 'Deliveroo' ? '✔ ' : ''}Deliveroo
          </Text>
          <Text style={styles.serviceTime}>20 minutes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.serviceItem,
            selectedService === 'Just Eats' && styles.selectedService,
          ]}
          onPress={() => handleSelectService('Just Eats')}
        >
          <Text style={styles.serviceText}>
            {selectedService === 'Just Eats' ? '✔ ' : ''}Just Eats
          </Text>
          <Text style={styles.serviceTime}>45 minutes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.serviceItem,
            selectedService === 'Uber Eats' && styles.selectedService,
          ]}
          onPress={() => handleSelectService('Uber Eats')}
        >
          <Text style={styles.serviceText}>
            {selectedService === 'Uber Eats' ? '✔ ' : ''}Uber Eats
          </Text>
          <Text style={styles.serviceTime}>25 minutes</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Deliver Button */}
      <TouchableOpacity style={styles.deliverButton} onPress={() => alert('Please select a service first!')}>
        <Text style={styles.deliverButtonText}>Deliver</Text>
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
