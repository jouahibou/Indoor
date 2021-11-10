import useLocation from "../src/useLocation";
import React, { useEffect, useState } from "react";
import {
    Animated,
    FlatList,
    StyleSheet,
    View,
    Button,
    TouchableOpacity,
    Text,
} from "react-native";

function LIST() {
    const location = useLocation();




    return (
        <>
            <Text> {!location
                ? 'Waiting'
                : ` ${location.latitude} \n ${location.longitude
                }`}</Text>


        </>
    );
}

export default LIST;