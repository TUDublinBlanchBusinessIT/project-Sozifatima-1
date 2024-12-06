import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function DiscountsScreen({ navigation }) {
  const [selectedDiscount, setSelectedDiscount] = useState('');

  const handleSelectDiscount = (discount) => {
    setSelectedDiscount(discount);
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
          style={[
            styles.discountItem,
            selectedDiscount === '10%' && styles.selectedDiscount,
          ]}
          onPress={() => handleSelectDiscount('10%')}
        >
          <Text style={styles.discountText}>
            {selectedDiscount === '10%' ? '✔ ' : ''} 10% Discount on your next order
          </Text>
          {selectedDiscount === '10%' && (
            <Text style={styles.details}>Use Now!</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.discountItem,
            selectedDiscount === '30%' && styles.selectedDiscount,
          ]}
          onPress={() => handleSelectDiscount('30%')}
        >
          <Text style={styles.discountText}>
            {selectedDiscount === '30%' ? '✔ ' : ''} Limited Offer: 30% off your next order
          </Text>
          {selectedDiscount === '30%' && (
            <Text style={styles.details}>Use Now!</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.discountItem,
            selectedDiscount === '60%' && styles.selectedDiscount,
          ]}
          onPress={() => handleSelectDiscount('60%')}
        >
          <Text style={styles.discountText}>
            {selectedDiscount === '60%' ? '✔ ' : ''} Get 60% off your next order
          </Text>
          {selectedDiscount === '60%' && (
            <Text style={styles.details}>Use Code 3457!</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.discountItem,
            selectedDiscount === 'EXPIRED' && styles.selectedDiscount,
          ]}
          onPress={() => handleSelectDiscount('EXPIRED')}
        >
          <Text style={styles.discountText}>
            {selectedDiscount === 'EXPIRED' ? '✔ ' : ''} EXPIRED!!
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Lighter background color
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  navItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  discountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: '#ff914d', // Subtle left border
  },
  selectedDiscount: {
    borderColor: '#ff914d',
    borderWidth: 2,
    backgroundColor: '#ffebd6', // Light highlight when selected
  },
  discountText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
  details: {
    fontSize: 14,
    color: '#ff914d', // Highlighted color for details
  },
});
