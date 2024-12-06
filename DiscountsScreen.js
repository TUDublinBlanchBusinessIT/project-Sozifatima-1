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
            {selectedDiscount === '10%' ? '✔ ' : ''} 10% Discount next time you place an order
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
});
