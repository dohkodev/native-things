import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {

    const nombre = 'chris';

    return (
        <View>
            <Text style={styles.textStyle}>esto es una prueba de componentes</Text>
            <Text style={styles.textFont}>Hola {nombre}</Text>
        </View>
    ) 
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    textFont: {
        fontSize: 25
    }
});

export default ComponentsScreen;