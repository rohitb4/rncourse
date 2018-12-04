import React from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';
import placeImage from './../../assets/images/background.jpg';

class PlaceImage extends React.Component {
    render(){
        return (<View style={[styles.container, this.props.style]}>
             <View style={styles.placeholder}>
                <Image source={placeImage} style={styles.placeImage}></Image>
            </View>
            <View style={styles.button}><Button title="Upload image" onPress = {()=> alert('PlaceImage')} ></Button></View>
        </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    placeholder: {
        width: '100%',
        height: 150,
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderColor: '#aaa'
    },
    button: {
        marginTop: 10,
        marginBottom: 10
    },
    placeImage: {
        width: '100%',
        height: '100%'
    }
})

export default PlaceImage;