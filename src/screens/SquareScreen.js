import React, {useReducer} from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state: es el estado que nunca será modificado 
    // state === {rojo: number, verde: number, azul: number}
    // action: es las modificaciones que queremos realizar en el estado retornando en un nuevo objeto
    // action === {type: 'change_rojo' || 'change_verde' || 'change_azul', payload: 15 || -15}

    switch (action.type){
        case 'change_rojo'  :
            return state.rojo + action.payload > 255 || state.rojo + action.payload < 0
                ? state
                : {...state, rojo: state.rojo + action.payload};
        case 'change_verde' :
            return state.verde + action.payload > 255 || state.verde + action.payload < 0
                ? state
                : {...state, verde: state.verde + action.payload};
        case 'change_azul'  :
            return state.azul + action.payload > 255 || state.azul + action.payload < 0
            ? state
            : {...state, azul: state.azul + action.payload};
        default:
            return;
    }

}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, {rojo: 0, verde: 0, azul: 0});
    const {rojo, verde, azul} = state;

    return <View>
        <ColorCounter 
            onIncrease={() => dispatch({type: 'change_rojo', payload: COLOR_INCREMENT})} 
            onDecrease={() => dispatch({type: 'change_rojo', payload: -1 * COLOR_INCREMENT})} 
            color='Rojo'
        />
        <ColorCounter 
            onIncrease={() => dispatch({type: 'change_azul', payload: COLOR_INCREMENT})} 
            onDecrease={() => dispatch({type: 'change_azul', payload: -1 * COLOR_INCREMENT})} 
            color='Azul'
        />
        <ColorCounter 
            onIncrease={() => dispatch({type: 'change_verde', payload: COLOR_INCREMENT})} 
            onDecrease={() => dispatch({type: 'change_verde', payload: -1 * COLOR_INCREMENT})} 
            color='Verde'
        />
        <View style={{height: 120, width: 120, backgroundColor: `rgb(${rojo}, ${verde}, ${azul})`}}/>
    </View> 
    
};

const styles = StyleSheet.create({

});

export default SquareScreen;