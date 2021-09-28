import { StyleSheet, View, Text, SafeAreaView, Image, Button, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import * as firebase from 'firebase';
import { Input } from "react-native-elements/dist/input/Input";
import { NavigationContainer } from "@react-navigation/native";
import MapView from "react-native-maps";
import MenuDrawer from "react-native-side-drawer";

// Welcome screen code 
export default function Home({navigation}) {
  const customMap = []
  return (
    <SafeAreaView>
        <View style={styles.container}>
            
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
});