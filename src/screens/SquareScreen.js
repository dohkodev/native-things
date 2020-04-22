import React, {useState} from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    
    const [rojo, setRojo] = useState(0);
    const [azul, setAzul] = useState(0);
    const [verde, setVerde] = useState(0);

    return <View>
        <ColorCounter 
            onIncrease={() => setRojo(rojo + COLOR_INCREMENT)} 
            onDecrease={() => setRojo(rojo - COLOR_INCREMENT)} 
            color='Rojo'
        />
        <ColorCounter 
            onIncrease={() => setAzul(azul + COLOR_INCREMENT)} 
            onDecrease={() => setAzul(azul - COLOR_INCREMENT)} 
            color='azul'
        />
        <ColorCounter 
            onIncrease={() => setVerde(verde + COLOR_INCREMENT)} 
            onDecrease={() => setVerde(verde - COLOR_INCREMENT)} 
            color='Verde'
        />
        <View style={{height: 120, width: 120, backgroundColor: `rgb(${rojo}, ${verde}, ${azul})`}}/>
    </View> 
    
};

const styles = StyleSheet.create({

});

export default SquareScreen;