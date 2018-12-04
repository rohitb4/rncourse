import React from 'react';

import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import lib from './../../components/lib/lib';



class SideDrawer extends React.Component {
    render() {
        return (<View style={[styles.drawer,{width: Dimensions.get('window').width * 0.8}]}>
            <TouchableOpacity>
                <View style={styles.drawerLink}>
                    <Icon name={lib.getPlatformIcon('log-out')} size={30}  color="#aaa" />
                    <Text style={styles.linkText}>Logout</Text>
                </View>
            </TouchableOpacity>
           
        </View>);
    }
}

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: '#fff',
        paddingTop: 50,
        flex: 1
    },
    drawerLink: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#eee'
    },
    linkText: {
        marginLeft: 10
    }
})

export default SideDrawer;