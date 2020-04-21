import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>Hola Mundo!</Text>
    <Button 
      title="Ir al componente Demo"
      onPress={() => console.log("boton demo!")}
      />
    <TouchableOpacity
      onPress={() => console.log("boton lista!")}
    >
      <Text style={styles.text}>Ir al componente Lista</Text>
    </TouchableOpacity>

  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
