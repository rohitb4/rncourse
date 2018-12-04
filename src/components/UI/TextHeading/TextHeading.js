import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TextHeading = props => (
    <Text {...props} style={[styles.main, props.style]}>{props.children}</Text>
);


const styles = StyleSheet.create({
    main: {
        fontSize: 28,
        fontWeight: 'bold'
    }
})
export default TextHeading;