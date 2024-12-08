import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function DiscountsScreen({ navigation }) {
  const [selectedDiscount, setSelectedDiscount] = useState('');

  // Handle discount selection
  const handleSelectDiscount = (discount) => {
    setSelectedDiscount(discount);
    Alert.alert("Discount Applied", `${discount}% Discount has been applied.`);
  };

  // Handle delivery confirmation
  const handleConfirmDelivery = () => {
    Alert.alert("Delivery Confirmed", "Your order is on its way!");
    navigation.navigate('Home'); // Navigate back to Home screen
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

      <ScrollView>
        {/* Discount Options */}
        <TouchableOpacity
          style={[styles.discountItem, selectedDiscount === '10%' && styles.selectedDiscount]}
          onPress={() => handleSelectDiscount('10%')}
        >
          <Text style={styles.discountText}>10% Discount on your next order</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.discountItem, selectedDiscount === '30%' && styles.selectedDiscount]}
          onPress={() => handleSelectDiscount('30%')}
        >
          <Text style={styles.discountText}>30% Discount on your next order</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.discountItem, selectedDiscount === '60%' && styles.selectedDiscount]}
          onPress={() => handleSelectDiscount('60%')}
        >
          <Text style={styles.discountText}>60% Discount on your next order</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.discountItem, selectedDiscount === '25%' && styles.selectedDiscount]}
          onPress={() => handleSelectDiscount('25%')}
        >
          <Text style={styles.discountText}>25% Discount on your next order</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.discountItem, selectedDiscount === '15%' && styles.selectedDiscount]}
          onPress={() => handleSelectDiscount('15%')}
        >
          <Text style={styles.discountText}>15% Discount on your next order</Text>
        </TouchableOpacity>
        

      </ScrollView>

      {/* Confirm Delivery Button */}
      <TouchableOpacity style={styles.deliverButton} onPress={handleConfirmDelivery}>
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
  discountItem: {
    padding: 15,
    marginBottom: 15,
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
