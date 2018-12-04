import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import DefaultInput from './../UI/DefaultInput/DefaultInput';

class AddPlace  extends React.Component{


    

    render() {
        return (
            <DefaultInput value={this.props.placeName} 
            onChangeText={this.props.onChangeText}
            placeholder="Place Name"/>
            
          )
    }
}

export default AddPlace;

