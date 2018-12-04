import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
const LisItem = (props) => (
    <TouchableOpacity onPress={props.onPlacePress}>
    <View style={styles.listView}>
        <Image source={{uri:props.item.image}} style={styles.placeImage}/>
        <Text>{props.item.value}</Text>
    </View>
    </TouchableOpacity>
)

export default LisItem;

const styles = StyleSheet.create({
    listView: {
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImage: {
         width: 30,
         height: 30,
         marginRight: 10
    }
})