import React from 'react';
import {Text, StyleSheet} from 'react-native';

const MainText = props => (
    <Text {...props} style={[styles.main, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
    main: {
        color: '#333'
    }
})

export default MainText;