import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function DiscountsScreen({ navigation }) {
  const [selectedDiscount, setSelectedDiscount] = useState('');
  const [selectedService, setSelectedService] = useState('');

  // Handle Discount Selection
  const handleSelectDiscount = (discount, service) => {
    setSelectedDiscount(discount);
    setSelectedService(service);

    // Show Alert when a discount is applied
    Alert.alert(
      'Discount Applied',
      `${discount} discount has been applied to ${service}!`
    );
  };

  // Handle Delivery Button Click
  const handleDelivery = () => {
    if (selectedService && selectedDiscount) {
      Alert.alert(
        'Delivery Selected',
        `You have selected ${selectedService} with the ${selectedDiscount} discount applied!`
      );
    } else {
      Alert.alert(
        'No Selection',
        'Please select a discount and a service before confirming delivery.'
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
        <Text style={styles.navItem}>Discount</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.navItem}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Discount Options */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Discount 10% */}
        <TouchableOpacity
          style={[
            styles.discountItem,
            selectedDiscount === '10%' && styles.selectedDiscount,
          ]}
          onPress={() => handleSelectDiscount('10%', 'Deliveroo')}
        >
          <Text style={styles.discountText}>
            {selectedDiscount === '10%' ? '✔ ' : ''} 10% Discount on your next order
          </Text>
          {selectedDiscount === '10%' && <Text style={styles.details}>Use Now!</Text>}
        </TouchableOpacity>

        {/* Discount 30% */}
        <TouchableOpacity
          style={[
            styles.discountItem,
            selectedDiscount === '30%' && styles.selectedDiscount,
          ]}
          onPress={() => handleSelectDiscount('30%', 'Just Eats')}
        >
          <Text style={styles.discountText}>
            {selectedDiscount === '30%' ? '✔ ' : ''} 30% off your next order (Limited Offer)
          </Text>
          {selectedDiscount === '30%' && <Text style={styles.details}>Use Now!</Text>}
        </TouchableOpacity>

        {/* Discount 60% */}
        <TouchableOpacity
          style={[
            styles.discountItem,
            selectedDiscount === '60%' && styles.selectedDiscount,
          ]}
          onPress={() => handleSelectDiscount('60%', 'Uber Eats')}
        >
          <Text style={styles.discountText}>
            {selectedDiscount === '60%' ? '✔ ' : ''} Get 60% off your next order
          </Text>
          {selectedDiscount === '60%' && <Text style={styles.details}>Use Code: 3457</Text>}
        </TouchableOpacity>

        {/* Discount Expired */}
        <TouchableOpacity
          style={[
            styles.discountItem,
            selectedDiscount === 'EXPIRED' && styles.selectedDiscount,
          ]}
          onPress={() => handleSelectDiscount('EXPIRED', 'Uber Eats')}
        >
          <Text style={styles.discountText}>
            {selectedDiscount === 'EXPIRED' ? '✔ ' : ''} EXPIRED!
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Deliver Button */}
      <TouchableOpacity style={styles.deliverButton} onPress={handleDelivery}>
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
  scrollContainer: {
    paddingBottom: 20,
  },
  discountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 25,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  selectedDiscount: {
    borderColor: '#ff914d',
    borderWidth: 2,
  },
  discountText: {
    fontSize: 16,
    color: '#333',
  },
  details: {
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
