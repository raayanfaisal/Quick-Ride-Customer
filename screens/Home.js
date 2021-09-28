import { StyleSheet, View, Text, SafeAreaView, Image, Button, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import * as firebase from 'firebase';
import { Input } from "react-native-elements/dist/input/Input";
import { NavigationContainer } from "@react-navigation/native";

// Welcome screen code 
export default function Home({navigation}) {

  return (
    <SafeAreaView>
            <StatusBar
            style={styles.statusBarStyle}
            hidden={false} />
        <View style={styles.container}>
             <Image source={require('../assets/homeImg.png')} style={styles.carImage} resizeMode="center" />
             <Text style={styles.topHeader}>QUICK RIDE</Text>
             <Text>Get started by Signing up or Signing in</Text>
             <TouchableOpacity onPress={()=> navigation.navigate('Signin')} style={styles.loginBtn}>
               <Text style={styles.btnText}>Login</Text>
             </TouchableOpacity>
             <Text style={{textAlign: 'center', marginTop: '5%', fontSize: 13, width: '70%'}}>By signing up you have agreed the to Terms and Conditions of Quick Ride</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F6F9",
    alignItems: "center",
    height: '100%'
  },

  carImage: {
    width: 300,
    height: 300,
    marginTop: '5%'
  },
  topHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: '2%'
  },
  loginBtn: {
    width: '70%',
    height: '7%',
    color: 'white',
    backgroundColor: '#292929',
    marginTop: '22%'
  },
  registerBtn: {
    width: '70%',
    height: '7%',
    color: 'white',
    backgroundColor: '#292929',
    marginTop: '5%',
  },
  btnText: {
    color: 'white',
    fontWeight: '900',
    textAlign: 'center',
    marginTop: '5.5%'
  },
  statusBarStyle: {
    color: 'black'
  }
});
