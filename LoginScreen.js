import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function SignInScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (username && password) {
      alert(`Welcome back, ${username}!`);
    } else {
      alert('Please enter both username and password!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('./assets/logo.png')} // Replace with your logo file path
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>Log In</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#704214"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#704214"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Footer */}
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
    borderColor: '#C7A17A', // Light brown border
    borderWidth: 1,
    fontSize: 16,
    color: '#704214',
  },
  button: {
    width: '25%',
    height: 50,
    backgroundColor: '#FF9933', // Orange button
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
