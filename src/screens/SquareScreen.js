import React, {useReducer} from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state: es el estado que nunca será modificado 
    // state === {rojo: number, verde: number, azul: number}
    // action: es las modificaciones que queremos realizar en el estado retornando en un nuevo objeto
    // action === {colorToChangue: 'rojo' || 'verde' || 'azul', amount: 15 || -15}

    switch (action.colorToChangue){
        case 'rojo'  :
            return {...state, rojo: state.rojo + action.amount}
        case 'verde' :
            return {...state, verde: state.verde + action.amount}
        case 'azul'  :
            return {...state, azul: state.azul + action.amount}
        default:
            return;
    }

}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, {rojo: 0, verde: 0, azul: 0});
    const {rojo, verde, azul} = state;

    return <View>
        <ColorCounter 
            onIncrease={() => dispatch({colorToChangue: 'rojo', amount: COLOR_INCREMENT})} 
            onDecrease={() => dispatch({colorToChangue: 'rojo', amount: -1 * COLOR_INCREMENT})} 
            color='Rojo'
        />
        <ColorCounter 
            onIncrease={() => dispatch({colorToChangue: 'azul', amount: COLOR_INCREMENT})} 
            onDecrease={() => dispatch({colorToChangue: 'azul', amount: -1 * COLOR_INCREMENT})} 
            color='Azul'
        />
        <ColorCounter 
            onIncrease={() => dispatch({colorToChangue: 'verde', amount: COLOR_INCREMENT})} 
            onDecrease={() => dispatch({colorToChangue: 'verde', amount: -1 * COLOR_INCREMENT})} 
            color='Verde'
        />
        <View style={{height: 120, width: 120, backgroundColor: `rgb(${rojo}, ${verde}, ${azul})`}}/>
    </View> 
    
};

const styles = StyleSheet.create({

});

export default SquareScreen;