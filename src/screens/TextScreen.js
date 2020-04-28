import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {

    const [password, setPassword] = useState('');

    return <View>
        <Text>Ingresa una Contraseña</Text>
        <TextInput 
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value={password}
            onChangeText={(valorNuevo) => {
                setPassword(valorNuevo);
            }}
        />
        {password.length < 5 && password.length > 0 ? <Text>Contrase demasiado corta!</Text> : null}
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