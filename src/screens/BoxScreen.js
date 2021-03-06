import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {

    return <View style={styles.viewStyle}>
       <Text style={styles.textOneStyle}>Child #1</Text>
       <Text style={styles.textTwoStyle}>Child #2</Text>
       <Text style={styles.textThreeStyle}>Child #3</Text>
    </View> 
    
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 200,
        //flexDirection: 'row'
        //justifyContent: 'flex-start',
        //flexDirection: 'center'
    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'blue',
        flex: 1
    },
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'blue',
        flex: 1
    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'blue',
        flex: 5
    }
});

export default BoxScreen;