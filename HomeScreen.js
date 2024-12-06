import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    console.log("HomeScreen rendered");
  }, []);

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  const handleDelivery = () => {
    if (selectedService) {
      alert(`You selected ${selectedService}!`);
    } else {
      alert('Please select a delivery service!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

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
          <Text style={styles.serviceText}>Deliveroo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.serviceItem,
            selectedService === 'Just Eats' && styles.selectedService,
          ]}
          onPress={() => handleSelectService('Just Eats')}
        >
          <Text style={styles.serviceText}>Just Eats</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.serviceItem,
            selectedService === 'Uber Eats' && styles.selectedService,
          ]}
          onPress={() => handleSelectService('Uber Eats')}
        >
          <Text style={styles.serviceText}>Uber Eats</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Deliver Button */}
      <TouchableOpacity style={styles.deliverButton} onPress={handleDelivery}>
        <Text style={styles.deliverButtonText}>Deliver</Text>
      </TouchableOpacity>

      {/* View Discounts Button */}
      <TouchableOpacity
        style={styles.deliverButton}
        onPress={() => navigation.navigate('Discounts')} // Navigate to Discounts screen
      >
        <Text style={styles.deliverButtonText}>View Discounts</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
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
  },
  serviceItem: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  serviceText: {
    fontSize: 16,
    color: '#333',
  },
  selectedService: {
    backgroundColor: '#ff914d',
  },
  deliverButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#ff914d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
  },
  deliverButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
