import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {

    const [name, setName] = useState('');

    return <View>
        <Text>Ingresa Tu Nombre</Text>
        <TextInput 
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value={name}
            onChangeText={(valorNuevo) => {
                setName(valorNuevo);
            }}
        />
        <Text>Tu Nombre Es: {name}</Text>
    </View> 
    
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'tomato',
        borderWidth: 1
    }
});

export default TextScreen;