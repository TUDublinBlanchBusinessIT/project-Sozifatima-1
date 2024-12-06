import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import from Firebase Authentication
import { auth, db } from './firebaseconfig'; // Import Firebase auth and Firestore
import { doc, setDoc } from 'firebase/firestore'; // Firestore functions

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to add user data to Firestore
  const addUserData = async (userId, username, email) => {
    try {
      await setDoc(doc(db, "SignUp", userId), {
        username: username,
        email: email
      });
      console.log("User data added to Firestore");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // Function to handle the sign-up process
  const handleSignUp = async () => {
    if (username && email && password && confirmPassword) {
      if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match!');
        return;
      }

      try {
        // Create user with email and password using Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save additional user information (username, email) to Firestore
        await addUserData(user.uid, username, email);

        alert('Success', 'Account created successfully!');
        Alert.alert('Success', 'Account created successfully!');
        navigation.navigate('Login'); // Navigate to Login screen after successful sign-up
      } catch (error) {
        Alert.alert('Error', error.message); // Show error message if something went wrong
      }
    } else {
      Alert.alert('Error', 'Please fill in all the fields!');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')} // Replace with your logo file path
        style={styles.logo}
      />

      <Text style={styles.title}>Sign Up</Text>

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
        placeholder="Email"
        placeholderTextColor="#704214"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Create Password"
        placeholderTextColor="#704214"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Re-write Password"
        placeholderTextColor="#704214"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Sign-Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        If you already have an account,{' '}
        <Text style={styles.link} onPress={() => navigation.goBack()}>
          Log In
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
    color: '#FF9933', // Orange for the link
    fontWeight: 'bold',
  },
});