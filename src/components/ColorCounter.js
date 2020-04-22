import React, {useState} from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {

    //const [counter, setCounter] = useState(0);

    return <View>
        <Text>Color {color}</Text>
        <Button 
            onPress={() => onIncrease()}
            title={`Aumentar ${color}`}
        />
        <Button 
            onPress={() => onDecrease()}
            title={`Disminuir ${color}`} />
    </View> 
    
};

const styles = StyleSheet.create({

});

export default ColorCounter;