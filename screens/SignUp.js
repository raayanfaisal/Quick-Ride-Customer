import { StyleSheet, View, Text, SafeAreaView, Image, Button, TouchableOpacity } from "react-native";
import React from "react";
import { Input } from "react-native-elements/dist/input/Input";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import firebase from "../firebase/fire";

// Welcome screen code 
export default function Home({navigation}) {
  const [email,setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [error, setError]= useState('');

  const signUp = async () => {
      try {
        firebase.auth().createUserWithEmailAndPassword(email,password);
        navigation.navigate('mapView');
      }catch(err) {
          setError(err.messege);
      }

  }
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.signText}>Welcome</Text>
            <Text style={styles.subText}>Sign in to continue</Text>
            <View style={styles.inputContainer}>
                <Input value={email} onChangeText={setEmail} style={styles.inputTxt} placeholder="Email" />
            </View>
            <View style={styles.inputContainerTwo}>
                <Input value={password} onChangeText={setPassword} secureTextEntry style={styles.inputTxt} placeholder="Password" />
            </View>
            <View style={styles.btnCont}>
            <Button style={styles.actionBtn} title="SignUp" onPress={()=> signUp()} />
            </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#F5F6F9",
      height: '100%',
      width: '98%'
    },
    signText: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: '22%',
        marginLeft: '5%'
    },
    subText: {
        color: 'silver',
        marginLeft: '5%',
        marginTop: '2%'
    },
    inputTxt: {
        width: '70%'
    },
    inputContainer: {
        width: '90%',
        marginLeft: '5%',
        marginTop: '30%'
    },
    inputContainerTwo: {
        width: '90%',
        marginLeft: '5%',
        marginTop: '5%'
    },
    btnCont: {
        alignItems: 'center',
        alignContent: 'center'
    },
    loginBtn: {
        width: '70%',
        height: '30%',
        color: 'white',
        borderRadius: 50,
        backgroundColor: '#25f567',
        alignContent: 'center',
        alignItems: 'center'
      },
      btnText: {
          marginTop: '5%',
          fontWeight: 'bold'
      },
  });