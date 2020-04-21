import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return <View>
        <ImageDetail 
            title="Bosque"  
            imageSource={require('../../assets/forest.jpg')}
            score={9}
        />
        <ImageDetail 
            title="Playa"   
            imageSource={require('../../assets/beach.jpg')}
            score={7}
        />
        <ImageDetail 
            title="Montaña" 
            imageSource={require('../../assets/mountain.jpg')}
            score={8}
        />
    </View>
};

const styles = StyleSheet.create({

});

export default ImageScreen;