import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Signin from './screens/SignIn';
import Signup from './screens/SignUp';
import Maps from './screens/Maps';
import Sucess from './screens/Registeration';
import Booking from './screens/Booking';
import MainScreen from './screens/MainScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="SignUp" component={Signup} />
            <Stack.Screen name="mapView" component={Maps} />
            <Stack.Screen name="successScreen" component={Sucess} />
            <Stack.Screen name="BookingScreen" component={Booking} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
