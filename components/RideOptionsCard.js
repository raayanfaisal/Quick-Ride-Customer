import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY} from '@env';
import { TouchableOpacity } from 'react-native-gesture-handler';

const data = [
    {
        id: "QR-X-123",
        title: "qrX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },

    {
        id: "QR-X-456",
        title: "qrXL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },

    {
        id: "QR-LUX-789",
        title: "qrLUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    },
]

const RideOptionsCard = () => {
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete 
                        placeholder="Where to ?"
                        debounce={400}
                        fetchDetails={true}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        styles={toInputBoxStyle}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: "en"
                        }}
                    />
                    <FlatList 
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({item:{ id, title, multiplier, image}, item }) => (
                            <TouchableOpacity style={tw`flex-row justify-between items-center px-10`}>
                                <Image 
                                    style={{
                                        width: 100,
                                        height: 100,
                                        resizeMode: "cover",
                                    }}
                                    source={{ uri: image }}
                                    />
                                    <View>
                                        <Text>{title}</Text>
                                        <Text>Travel Time</Text>
                                    </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const toInputBoxStyle = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },

    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 20,
        paddingBottom: 0
    },

    textInputContainer: {
        paddingHorizontal: 20, 
        paddingBottom: 0,
    }
})
