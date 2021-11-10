import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const image = { uri: "https://zupimages.net/up/21/42/oku3.png" };


export default function Home() {

    const navigation = useNavigation();

    function navigateToList() {
        navigation.navigate("Carte");
    }
    function navigateToIndoor() {
        navigation.navigate("Indoor");
    }
    function navigateToDirection() {
        navigation.navigate("Direction");
    }

    return (

        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>TDSI-Indoor</Text>
            </ImageBackground>
            <Button title="Coordonnées Gps " color="black"
                onPress={() => navigateToList()}
            />
            <Button style={styles.button}  title="IndoorLocation" color="blue"
                onPress={() => navigateToIndoor()}
            />
            <Button title="outdoor location" color="green"
                onPress={() => navigateToDirection()}
            />
        </View>);

}
const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 48,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
    
});