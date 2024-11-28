import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = () => {
    if (email) {
      setMessage('We’ve sent you a link to reset your password!');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('./assets/logo.png')} // Adjust your logo path
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>Forgot Password</Text>

      {/* Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#9e9e9e"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Message */}
      {message ? <Text style={styles.message}>{message}</Text> : null}

      {/* Link to go back to Login */}
      <Text style={styles.footerText}>
        Remember your password?{' '}
        <Text style={styles.link} onPress={() => navigation.goBack()}>
          Log In
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#f5f5f5', // Light background color
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', // Dark color for the title
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF7F32', // Orange button color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    color: '#333',
    marginVertical: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#333',
    marginTop: 20,
  },
  link: {
    color: '#FF7F32', // Orange link color
    fontWeight: 'bold',
  },
});
