import React, {useReducer} from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const reducer = (state, action) => {
    // state === {counter: number}
    // action === {type: 'increment' || 'decrement', payload: 1 || -1}
    switch (action.type){
        case 'increment'  :
            return {...state, counter: state.counter + action.payload};
        case 'decrement' :
            return {...state, counter: state.counter - action.payload};
        default:
            return state;
    }

}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, {counter: 0});
    const {counter} = state;
    return <View>
        <Button 
            title="Aumentar" 
            onPress={() => {
                dispatch({type: 'increment', payload: 1})
            }} 
        />
        <Button 
            title="Disminuir" 
            onPress={() => {
                dispatch({type: 'decrement', payload: 1})
            }}
        />
        <Text>Contador Actual: {counter}</Text>
    </View> 
    
};

const styles = StyleSheet.create({

});

export default CounterScreen;