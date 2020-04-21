import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ComponentsScreen = () => {

    const Amigos = [
        {nombre: 'Amigo #1', edad: 20},
        {nombre: 'Amigo #2', edad: 21},
        {nombre: 'Amigo #3', edad: 22},
        {nombre: 'Amigo #4', edad: 24},
        {nombre: 'Amigo #5', edad: 25},
        {nombre: 'Amigo #6', edad: 26},
        {nombre: 'Amigo #7', edad: 27}
    ]

    return (
        <FlatList 
            keyExtractor={friend => friend.nombre}
            data={Amigos}
            renderItem={({item}) => {
            return <Text style={styles.textStyle}>{item.nombre} - edad {item.edad}</Text>
            }}
        /> 

    ) 
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default ComponentsScreen;