import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ListItem from './../ListItem';

const PlacesList = (props) => {

    return (<FlatList style={styles.placesList} data={props.places}
        renderItem={(info)=> (
            <ListItem item={info.item}   onPlacePress ={() => {
                props.onPlacePress(info.item);
            }}/>
        )}
    >
   
   
    </FlatList>);
}

export default PlacesList;

const styles = StyleSheet.create({
    placesList: {
        width: '100%'
    }
})