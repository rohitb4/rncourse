import React from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';

class PlaceMap extends React.Component {
    render(){
        return (<View style={[styles.container, this.props.style]}>
             <View style={styles.placeholder}>
            </View>
            <View style={styles.button}><Button title="Pick Location" onPress = {()=> alert('Map')} ></Button></View>
        </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '80%'
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
    }
})

export default  PlaceMap;