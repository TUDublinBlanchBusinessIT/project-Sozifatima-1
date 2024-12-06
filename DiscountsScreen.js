import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function DiscountsScreen({ navigation }) {
  const [selectedDiscount, setSelectedDiscount] = useState('');

  const handleSelectDiscount = (discount) => {
    setSelectedDiscount(discount);
  };

  const handleApplyDiscount = (discount) => {
    Alert.alert(`${discount} Discount applied!`);
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
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => handleApplyDiscount('10%')}
            >
              <Text style={styles.applyButtonText}>Applied</Text>
            </TouchableOpacity>
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
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => handleApplyDiscount('30%')}
            >
              <Text style={styles.applyButtonText}>Applied</Text>
            </TouchableOpacity>
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
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => handleApplyDiscount('60%')}
            >
              <Text style={styles.applyButtonText}>Applied</Text>
            </TouchableOpacity>
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
          {selectedDiscount === 'EXPIRED' && (
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => handleApplyDiscount('EXPIRED')}
            >
              <Text style={styles.applyButtonText}>Applied</Text>
            </TouchableOpacity>
          )}
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
    padding: 20,
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
    backgroundColor: '#ffebd6', // Light background color when selected
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
  applyButton: {
    backgroundColor: '#ff914d',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
