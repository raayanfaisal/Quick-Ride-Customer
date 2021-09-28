import { StyleSheet, View, Text, TextInput, SafeAreaView, Image, Button, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import React, {useRef} from "react";
import { Input } from "react-native-elements/dist/input/Input";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import firebase from "../firebase/fire";
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

// Welcome screen code 
export default function SigninScreen({navigation}) {
  const [email,setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [error, setError]= useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  // Function to be called when requesting for OTP
  const sendVerification = () =>{
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
  }

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((result) => {
        navigation.navigate('MainScreen');
      });
  }

  const signIn = async () => {
      try {
        firebase.auth().signInWithEmailAndPassword(email,password);
        navigation.navigate('mapView');
      }catch(err) {
          setError(err.messege);
      }

  }
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <SafeAreaView>
            <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebase.app().options}
        />
            <View style={styles.container}>
                <Image source={require('../assets/LoginUX.png')} resizeMode="center" style={styles.topImg} />
                <Text style={styles.signText}>Welcome</Text>
                <Text style={styles.subText}>Welcome Back ! Login to continue</Text>
                <View style={styles.inputContainer}>
                    <Input 
                    onChangeText={setPhoneNumber} 
                    style={styles.inputTxt} 
                    placeholder="   Phone number"
                    />
                </View>
                <View style={styles.inputContainerTwo}>
                    <Input 
                    onChangeText={setCode} 
                    style={styles.inputTxt} 
                    placeholder="   OTP"
                    />
                </View>
                <TouchableOpacity onPress={sendVerification} style={styles.registerBtn}>
                <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={confirmCode} style={styles.registerBtn}>
                <Text style={styles.btnText}>Send OTP</Text>
                </TouchableOpacity>
                <Button style={styles.actionBtn} title="Don't have a account ? Regsiter now !" />
            </View>
        </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#F5F6F9",
      height: '100%',
      width: '98%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    signText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: '18%',
        marginLeft: '5%',
    },
    subText: {
        marginLeft: '5%',
        marginTop: '2%',
        fontSize: 15,
        color: 'black'
    },
    inputTxt: {
        width: '70%',
        borderWidth: 0,
        borderBottomWidth: 0,
        backgroundColor: '#ededed',
    },
    inputContainer: {
        width: '90%',
        marginLeft: '5%',
        marginTop: '20%'
    },
    inputContainerTwo: {
        width: '90%',
        marginLeft: '5%',
        marginTop: '0%'
    },
    btnCont: {
        alignItems: 'center',
        alignContent: 'center'
    },
    loginBtn: {
        width: '70%',
        height: '25%',
        color: 'white',
        borderRadius: 50,
        backgroundColor: '#25f567',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: '5%'
      },
      btnText: {
          marginTop: '5%',
          fontWeight: 'bold'
      },
      registerBtn: {
        width: '70%',
        height: '7%',
        color: 'white',
        backgroundColor: '#292929',
        marginTop: '10%'
      },

      btnText: {
        color: 'white',
        fontWeight: '900',
        textAlign: 'center',
        marginTop: '5%'
      },
      actionBtn: {
          color: 'white',
          fontWeight: '900'
      },
      topImg: {
          marginTop: '0%',
          width: 100,
          height: 100
      }
  });