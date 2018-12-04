import React from 'react';
import {View, Text, StyleSheet, TextInput, Button, ScrollView, Image} from 'react-native';

import {connect} from 'react-redux';
import {createPlace} from './../../store/actions/places/index';

import TextHeading from './../../components/UI/TextHeading/TextHeading';
import MainText from './../../components/UI/MainText/MainText';
import PlaceImage from './../../components/PlaceImage/PlaceImage';
import PlaceMap from './../../components/PlaceMap/PlaceMap';
import AddPlace from './../../components/AddPlace/AddPlace';

class SharePlace extends React.Component {
    state = {
        placeName: ''
    }
    addPlaceHandler = ()=>{
        this.props.addPlace(this.state.placeName);
    }
    onChangeTextInput = (event) => {
        this.setState({
            placeName: event
        })
      } 



    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
            <MainText>
                <TextHeading>Share your favorite place</TextHeading>
            </MainText>
           <PlaceImage style={styles.placeImage}/>
            
           <PlaceMap />
            
            <AddPlace placeName={this.state.placeName} onChangeText={this.onChangeTextInput}/>
            <View style={styles.button}>
                <Button title="Share" onPress={this.addPlaceHandler} ></Button>
            </View>
            
        </View>
        </ScrollView>)
    }
    constructor(props) {
        super(props);
        props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }
    onNavigatorEvent = (event) => {
        if(event.type === 'NavBarButtonPress' && event.id === "menuButton") {
            this.props.navigator.toggleDrawer({
                 // the side of the drawer since you can have two, 'left' / 'right'
                animated: true // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
              });
        }
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    placeholder: {
        width: '80%',
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
        width: '80%',
        marginTop: 10
    }
})

const mapDispatchToProps = (dispatch) =>{
    return {
        addPlace: (place) =>{
            dispatch(createPlace(place));
        }
    }
}

export default connect(null, mapDispatchToProps)(SharePlace);