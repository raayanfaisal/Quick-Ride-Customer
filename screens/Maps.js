import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import Map from '../components/Map';
import MapView from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import RideOptionsCard from "../components/RideOptionsCard";

const Maps = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <RideOptionsCard />
      </View>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({

});

