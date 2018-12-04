import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import startTabs from './../MainTabs/startMainTabs';

import TextHeading from './../../components/UI/TextHeading/TextHeading';
import MainText from './../../components/UI/MainText/MainText';
import DefaultInput from './../../components/UI/DefaultInput/DefaultInput';
import UIButton from './../../components/UI/UIButton/UIButton';
import backgroundImage from './../../assets/images/background.jpg';

class Auth extends React.Component {
    state = {
        landscape: Dimensions.get('window').width > 500 
    };
    onDimensionsChange = (dims) => {
        console.log(dims)
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
    onLogin = ()=> {
        startTabs();
    }
    render () {
        return (
        <ImageBackground source={backgroundImage} style={styles.bgImage}>
            <View style={styles.authView}>
                {this.state.landscape ? null: <MainText><TextHeading>Please Log In</TextHeading></MainText>}
                <UIButton onPress={this.onLogin}>Switch to Login</UIButton>
                <View style={styles.inputWrap}>
                    <DefaultInput placeholder="Usename" style={styles.input}/>
                    <View style={!this.state.landscape ? styles.passwordContainer : styles.landscapePasswordContainer}>
                        <View  style={!this.state.landscape ? styles.passwordWrapper : styles.landscapePasswordWrapper}>
                            <DefaultInput placeholder="Password" style={styles.input}/>
                        </View>
                        <View  style={!this.state.landscape ? styles.passwordWrapper : styles.landscapePasswordWrapper}>
                            <DefaultInput placeholder="Re-Password" style={styles.input}/>
                        </View>
                    </View>
                </View>
                
                <UIButton onPress={this.onLogin}>Submit</UIButton>
            </View>
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        width: '100%'
    },
    authView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#ddd',
        marginBottom: 10
    },
    inputWrap: {
        width: '80%',
        marginTop: 10
    },
    passwordContainer: {
        flexDirection: 'column'
    },
    passwordWrapper: {

    },
    landscapePasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    landscapePasswordWrapper: {
        width: '45%'
    }
})
export default Auth;