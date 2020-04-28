import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {

    return <View style={styles.viewStyle}>
       <Text style={styles.textStyle}>Box Screen Layout</Text>
    </View> 
    
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'blue',
        margin: 20
    }
});

export default BoxScreen;