import { StyleSheet, View, Text, SafeAreaView, Image, Button, TouchableOpacity } from "react-native";
import React from "react";
import * as firebase from 'firebase';
import { Input } from "react-native-elements/dist/input/Input";
import { NavigationContainer } from "@react-navigation/native";

// Welcome screen code 
export default function Home({navigation}) {

  return (
    <SafeAreaView>
        <View style={styles.container}>
             <Image style={styles.carImage} source={require('../assets/Correct.jpeg')} />
             <Text style={styles.topHeader}>Succesfully Registered</Text>
             <Text>Now you can login</Text>
             <TouchableOpacity onPress={()=> navigation.navigate('successScreen')} style={styles.loginBtn}>
               <Text style={styles.btnText}>Login</Text>
             </TouchableOpacity>
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
    width: 100,
    height: 100,
    marginTop: '60%'
  },
  topHeader: {
    fontSize: 25,
    marginTop: 20,
    fontWeight: 'bold'
  },
  loginBtn: {
    width: '70%',
    height: '7%',
    color: 'white',
    borderRadius: 50,
    backgroundColor: 'black',
    marginTop: '60%'
  },
  registerBtn: {
    width: '70%',
    height: '7%',
    color: 'white',
    backgroundColor: '#25f567',
    marginTop: '5%',
    borderRadius: 50
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '5%'
  }
});