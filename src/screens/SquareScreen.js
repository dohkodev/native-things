import React, {useState} from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    
    const [rojo, setRojo] = useState(0);
    const [azul, setAzul] = useState(0);
    const [verde, setVerde] = useState(0);

    const setColor = (color, changue) => {
        switch (color){
            case 'rojo':
                rojo + changue > 255 || rojo + changue < 0 ? null : setRojo(rojo + changue);
            return;
            case 'azul':
                azul + changue > 255 || azul + changue < 0 ? null : setAzul(azul + changue);
            return;
            case 'verde':
                verde + changue > 255 || verde + changue < 0 ? null : setVerde(verde + changue);
            return;
            default:
                return;
        }
    }

    return <View>
        <ColorCounter 
            onIncrease={() => setColor('rojo', COLOR_INCREMENT)} 
            onDecrease={() => setColor('rojo', -1 * COLOR_INCREMENT)} 
            color='Rojo'
        />
        <ColorCounter 
            onIncrease={() => setColor('azul', COLOR_INCREMENT)} 
            onDecrease={() => setColor('azul', -1 * COLOR_INCREMENT)} 
            color='Azul'
        />
        <ColorCounter 
            onIncrease={() => setColor('verde', COLOR_INCREMENT)} 
            onDecrease={() => setColor('verde', -1 * COLOR_INCREMENT)} 
            color='Verde'
        />
        <View style={{height: 120, width: 120, backgroundColor: `rgb(${rojo}, ${verde}, ${azul})`}}/>
    </View> 
    
};

const styles = StyleSheet.create({

});

export default SquareScreen;