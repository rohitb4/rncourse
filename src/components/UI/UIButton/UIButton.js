import React from 'react';
import {Text, TouchableHighlight, View, StyleSheet, Platform, TouchableNativeFeedback} from 'react-native';

const UIButton = props => {
    let content = (<View style={[styles.main, {backgroundColor: props.color || '#2a1887'}]}>
    <Text style={styles.text}>{props.children}</Text>
</View>)

    if (Platform.OS === 'android'){
        return (<TouchableNativeFeedback onPress={props.onPress}>
            {content}
        </TouchableNativeFeedback>
        );
    }
    else {
        return (<TouchableHighlight onPress={props.onPress}>
            {content}
        </TouchableHighlight>
        );
    }
   

}
   

const styles = StyleSheet.create({
    main: {
        borderRadius: 5,
        padding: 10
    },
    text: {
        color: '#fff'
    }
})

export default UIButton;