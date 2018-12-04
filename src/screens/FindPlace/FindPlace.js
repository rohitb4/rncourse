import React from 'react';
import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import PlacesList from './../../components/PlacesList/PlacesList'
import DefaultInput from './../../components/UI/DefaultInput/DefaultInput';
import {connect} from 'react-redux';

class FindPlace extends React.Component {
    state = {
        placesLoaded: false,
        buttonAnim: new Animated.Value(1),
        listAnim: new Animated.Value(0)
    }
    placePressHandler = (selectedPlace) => {
        this.props.navigator.push({
            screen: 'awesome-places.PlaceDetail',
            passProps: {
                place: this.props.places.find(place=> {
                    return place.key === selectedPlace.key;
                })
            }
        })
    }
    showList = () => {
        Animated.timing(this.state.listAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }
    onShowPlace = ()=>{
       
        Animated.timing(this.state.buttonAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start(() => {
            this.setState({
                placesLoaded: true
            });
            this.showList();
        });
    }
    render() {
        let content;
        if (!this.state.placesLoaded) {
            let styl = {
                opacity: this.state.buttonAnim,
                transform: [{
                    scale: this.state.buttonAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [10, 1]
                    })
                }]
            };
            content = (
                <Animated.View  style={[styles.findPlacesButton, styl]}>
                    <TouchableOpacity onPress={this.onShowPlace} >
                        <View style={styles.findPlacesView}>
                            <Text  style={styles.findPlacesText}>Find places</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            )
        }
        else {
            let styl = {
                opacity: this.state.listAnim
            };
            content = (
                <Animated.View  style= {styl}>
                    <PlacesList places={this.props.places} onPlacePress={this.placePressHandler} />
                </Animated.View>
                
            );
        }
        return (
        <View style={styles.findPlaces}>{content}
            
        </View>
        )
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
    findPlaces: {
        flex: 1
    },
    findPlacesButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    findPlacesView: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#a1abbb'
    },
    findPlacesText: {
        color: '#fff'
    }
})

const mapStateToProps = (store) =>{
    return {
        places: store.places.places
    }
}

// const mapDispatchToProps = (key) => {
//     return {
//         viewPlace: (place) => {

//         }
//     }
// }

export default connect(mapStateToProps, null)(FindPlace);