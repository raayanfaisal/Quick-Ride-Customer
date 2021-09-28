import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import { selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';

const MainScreen = () => {

    const dispatch = useDispatch();
    const origin = useSelector(selectOrigin);

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                    style={{
                        width: 100, 
                        height: 100, 
                        resizeMode: "contain"
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }} />
                    <GooglePlacesAutocomplete 
                        placeholder="Pickup Location"
                        styles={{
                            container: {
                                flex: 0,
                            },
                            textInput: {
                                fontSize: 18,

                            }
                        }}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        minLength={2}
                        enablePoweredByContainer={false}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en'
                        }}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                    />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default MainScreen

const styles = StyleSheet.create({})