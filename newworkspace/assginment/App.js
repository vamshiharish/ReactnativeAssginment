import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// create a LoginScreen component
function LoginScreen({ navigation }) {
  // using state hooks to store the username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //  handle the login button press
  function handleLogin() {
    // If you assume the login is successful
    alert('Login successful!');
    navigation.navigate('Home');
  }

  // JSX elements for the login screen
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}></View>
      <Text style={styles.title}>Sign in to you accounts</Text>
      <TextInput
        style={styles.input}
        placeholder="Your mobile number"
        placeholderTextColor="white"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Account Passcode"
        placeholderTextColor="white"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

// HomeScreen component
function HomeScreen() {
  // JSX elements for the home screen
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You are logged in!</Text>
    </View>
  );
}

// App component
function App() {
  // JSX elements for the app
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//  styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    margin: 10,
    width: 349,
    margin:10,
    color: 'white',
  },
  input: {
    width: 349,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    borderRadius:10,
    color: 'white',
  },
  buttonsty: {
    width: 350,
    height: 50,
  }, loginButton: {
    width: 300, 
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop:15,
  },
  buttonText: {
    color: '#2B58BC',
    fontSize: 16,
  },
  rectangle: {
    backgroundColor: 'white',
    width: 120,
    height: 120,
    alignSelf: 'flex-start',
    marginLeft: 22,
    borderRadius: 22,
  }
  
});

// export the App component
export default App;