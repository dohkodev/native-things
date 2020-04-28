import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => { // => destructurando props con { navigation }
  return <View>
    <Text style={styles.text}>Hola Mundo!</Text>
    <Button 
      title="Ir al componente Demo"
      onPress={() => navigation.navigate('Components')}
    />
    <Button 
      title="Ir al componente Lista"
      onPress={() => navigation.navigate('List')}
    />
    <Button 
      title="Ir al componente Imagen"
      onPress={() => navigation.navigate('Image')}
    />
    <Button 
      title="Ir al componente Contador"
      onPress={() => navigation.navigate('Counter')}
    />
    <Button 
      title="Ir al componente Color"
      onPress={() => navigation.navigate('Color')}
    />
    <Button 
      title="Ir al componente Cuadrado"
      onPress={() => navigation.navigate('Square')}
    />
    <Button 
      title="Ir al componente del Texto"
      onPress={() => navigation.navigate('Text')}
    />

        {/*     <TouchableOpacity
              onPress={() => props.navigation.navigate('List')}
            >
              <Text style={styles.text}>Ir al componente Lista</Text>
            </TouchableOpacity> */}

  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
