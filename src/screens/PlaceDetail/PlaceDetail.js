import React from 'react';
import {Modal, Image, View, Text, StyleSheet, Button, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class PlaceDetail extends React.Component{

    state = {
        landscape: Dimensions.get('window').width > 500 
    };
    onDimensionsChange = (dims) => { 
        this.setState({
            landscape: dims.window.width > 500 
        })
    }
    constructor(props) {
        super(props);
        Dimensions.addEventListener('change', this.onDimensionsChange);
    }
    componentWillUnmount(){
        Dimensions.removeEventListener('change', this.onDimensionsChange);
    }

    onPlaceClose = () => {
        this.props.navigator.pop({
            animated: true, // does the pop have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
          });
    }
    render () {
        var placeContent = null;
        var props = this.props;
        if(props.place){
            placeContent = (<View style={this.state.landscape? styles.landscapePlaceViewDetail: styles.placeViewDetail}>
            <Image source={{uri: props.place.image}} style={this.state.landscape? styles.placeImageLandscape: styles.placeImage}/>
                <View  style={this.state.landscape? styles.landscapeplaceViewContent: styles.placeViewContent}>
                <Text style={styles.placeName}>{props.place.value}</Text>
                <TouchableOpacity onPress={props.onPlaceDeleted} style={styles.trashIcon}>
                        <Icon size={30} name="ios-trash" color="red"/>
    
                    </TouchableOpacity>
                </View>
                </View>);
        }
       // alert(props.place !== null);
        return (<View onRequestClose={props.onPlaceClose}
         visible={props.place !== null}>
            <View style={styles.placeView}>
                {placeContent}
                <View>
                   
                </View>
            </View>
        </View>);
    }
}





export default PlaceDetail;

const styles = StyleSheet.create({
    placeImage: {
        width: '100%',
        height: 200
    },
    placeImageLandscape: {
        width: '50%',
        height: 200
    },
    placeView: {
        padding: 10,
        paddingTop: 26
    },
    landscapePlaceViewDetail: {
        flexDirection: 'row'
    },
    placeViewDetail: {
        flexDirection: 'column'
    },
    landscapeplaceViewContent: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    placeViewContent: {

    },
    placeName: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    trashIcon: {
        alignItems: 'center'
    }
})