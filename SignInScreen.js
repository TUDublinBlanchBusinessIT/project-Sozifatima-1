import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';

export default function SignInScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (username && password) {
      alert(`Welcome back, ${username}!`);
      // Add logic to handle sign-in
    } else {
      alert('Please enter both username and password!');
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp'); // Navigate to Sign Up screen
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={require('./assets/logo.png')} // Replace with your logo file path
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>Sign In</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button title="Sign In" onPress={handleSignIn} color="orange" />
        <View style={styles.spacer} />
        <Button title="Sign Up" onPress={handleSignUp} color="orange" />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '100%',
  },
  spacer: {
    height: 10,
  },
});
