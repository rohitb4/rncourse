import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import React from 'react';
import Auth from './src/screens/Auth/Auth';
import SharePlace from './src/screens/SharePlace/SharePlace';
import FindPlace from './src/screens/FindPlace/FindPlace';
import PlaceDetail from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

import configureStore from './src/store/configureStore';

let store = configureStore();

Navigation.registerComponent('awesome-places.AuthScreen', () => Auth, store, Provider);
Navigation.registerComponent('awesome-places.FindPlace', () => FindPlace, store, Provider);
Navigation.registerComponent('awesome-places.SharePlace', () => SharePlace, store, Provider);
Navigation.registerComponent('awesome-places.PlaceDetail', () => PlaceDetail, store, Provider);
Navigation.registerComponent('awesome-places.SideDrawer', () => SideDrawer, store, Provider);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'awesome-places.AuthScreen',
        title: 'Login'
    }
});