import React, { Component } from 'react';
import GetLocation from 'react-native-get-location';
import {
    View,

    Text, Dimensions,
    StyleSheet
} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import getDirections from 'react-native-google-maps-directions'
import { PermissionsAndroid } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import { customStyleMap } from '../src/Style';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBoGdzt-mVtwdClWhXG0d6mAbhAGIP43lU';

const backgroundColor = '#007256';

const { height, width } = Dimensions.get('window');

export default class Direction extends Component {

    static navigationOptions = {

        header: null

    };

    state = {

        origin:  {latitude: 14.6903, longitude: -17.4641},
        destination: { latitude: 14.688775, longitude: -17.466764 },

    };



    getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            var newOrigin = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };


            this.setState({
                origin: newOrigin
            });
        }, (err) => {
            console.log('error');
            console.log(err)

        }, { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 })

    };

    handleGetGoogleMapDirections = () => {

        const data = {

            source: this.state.origin,
            destination: this.state.destination,
            params: [
                {
                    key: "dirflg",
                    value: "b"
                }
            ]

        };

        getDirections(data)

    };

    render() {

        return (


            <View style={styles.container}>

                <MapView

                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    customMapStyle={customStyleMap}

                    ref={map => this.mapView = map}
                    style={styles.map}

                    region={{
                        latitude: (this.state.origin.latitude + this.state.destination.latitude) / 2,
                        longitude: (this.state.origin.longitude + this.state.destination.longitude) / 2,
                        latitudeDelta: Math.abs(this.state.origin.latitude - this.state.destination.latitude) + Math.abs(this.state.origin.latitude - this.state.destination.latitude) * .1,
                        longitudeDelta: Math.abs(this.state.origin.longitude - this.state.destination.longitude) + Math.abs(this.state.origin.longitude - this.state.destination.longitude) * .1,
                    }}

                    loadingEnabled={true}
                    toolbarEnabled={true}
                    zoomControlEnabled={true}

                >

                    <MapView.Marker
                        coordinate={this.state.destination}
                    >
                        <MapView.Callout onPress={this.handleGetGoogleMapDirections}>
                            <Text>Beusseul FI Pour Direction</Text>
                        </MapView.Callout>
                    </MapView.Marker>

                    <MapViewDirections
                        origin={this.state.origin}
                        destination={this.state.destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                    />

                </MapView>



            </View>

        );

    }

}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },

    map: {

        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

    },



});