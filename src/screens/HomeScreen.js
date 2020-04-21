import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>Hola Mundo!</Text>
    <Button 
      title="Ir al componente demo"
      onPress={() => console.log("boton!")}
      />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
