import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DiscountsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discounts</Text>

      <View style={styles.discountContainer}>
        <Text style={styles.discountTitle}>10% Discount</Text>
        <Text style={styles.discountDetail}>Get 10% off next time you place an order.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Use Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.discountContainer}>
        <Text style={styles.discountTitle}>Limited Offer!</Text>
        <Text style={styles.discountDetail}>Get 30% off your order if placed in the next 24 hours.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Use Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.discountContainer}>
        <Text style={styles.discountTitle}>Your next order just got better!</Text>
        <Text style={styles.discountDetail}>Use code 3457 to get 60% off your next order.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Use Now</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  discountContainer: {
    marginBottom: 20,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  discountTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  discountDetail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF9933',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FF9933',
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
