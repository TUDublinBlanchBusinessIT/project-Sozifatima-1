import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { auth } from './firebaseconfig'; // Firebase authentication
import { signOut } from 'firebase/auth'; // Firebase sign out function

export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    setUser(currentUser);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate('Login'); // Navigate to Login screen after logging out
      Alert.alert('Logged out successfully!');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while logging out.');
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Welcome, {user.displayName || 'User'}</Text>
          <Text style={styles.email}>Email: {user.email}</Text>
        </View>
      ) : (
        <Text style={styles.noUser}>No user data available</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')} // Navigate to Home
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogout} // Log out the user
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f8fa',
  },
  profileInfo: {
    marginBottom: 30,
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  noUser: {
    fontSize: 16,
    color: '#888',
    marginBottom: 30,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#ff914d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 15,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
