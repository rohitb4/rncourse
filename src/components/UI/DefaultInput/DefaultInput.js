import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const DefaultInput = props => (
    <TextInput {...props} style={[styles.main, props.style]} underlineColorAndroid="transparent"></TextInput>
);

const styles = StyleSheet.create({
    main: {
        borderWidth: 1,
        borderColor: '#bbb',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default DefaultInput;