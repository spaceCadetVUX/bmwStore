import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/loginForm'; // Adjust the path as necessary
import RegisterScreen from './screens/signUp'; // Adjust the path as necessary
import HelloPage from './screens/hellopage';


import { Provider as PaperProvider } from 'react-native-paper';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HelloPage">
        <Stack.Screen 
            name="HelloPage" 
            component={HelloPage} 
            options={{ headerShown: false }} // Hide the header
          />
          <Stack.Screen 
            name="Login" 
            component={login} 
            options={{ headerShown: false }} // Hide the header
          />
          <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{ headerShown: false }} // Hide the header
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
};

export default App;
