import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';

export default function App() {
  const handleSignIn = () => {
    Alert.alert('Sign In Button Pressed');
    // Navigate to the Sign-In screen (to be implemented)
  };

  const handleSignUp = () => {
    Alert.alert('Sign Up Button Pressed');
    // Navigate to the Sign-Up screen (to be implemented)
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={require('./assets/logo.png')} // Replace with your logo file path
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>Welcome to FastFood Compare</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button title="Sign In" onPress={handleSignIn} />
        <View style={styles.spacer} />
        <Button title="Sign Up" onPress={handleSignUp} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  spacer: {
    height: 10,
  },
});
