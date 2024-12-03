import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Firebase Authentication
import { auth } from './firebaseconfig'; // Import Firebase auth from firebaseconfig.js

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email && password) {
      try {
        // Sign in with email and password using Firebase Authentication
        await signInWithEmailAndPassword(auth, email, password);
        
        // If sign-in is successful, navigate to HomeScreen
        Alert.alert('Success', 'You are now logged in!');
        navigation.navigate('Home'); // Navigate to HomeScreen on successful login
      } catch (error) {
        // Show the error if login fails
        Alert.alert('Login Error', error.message);
      }
    } else {
      alert('Please enter both email and password!');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')} // Replace with your logo file path
        style={styles.logo}
      />

      <Text style={styles.title}>Log In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail} // Update the email state
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword} // Update the password state
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        If you haven’t created an account,{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Text>{' '}
        now
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFEFD5', // Cream background
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#704214', // Deep brown for the title
    marginBottom: 20,
  },
  input: {
    width: '25%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderColor: '#C7A17A',
    borderWidth: 1,
    fontSize: 16,
    color: '#704214',
  },
  button: {
    width: '25%',
    height: 50,
    backgroundColor: '#FF9933',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#704214',
    marginTop: 10,
  },
  link: {
    color: 'green', // Orange for the link
    fontWeight: 'bold',
  },
});
