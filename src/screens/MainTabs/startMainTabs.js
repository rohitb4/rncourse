import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import lib from './../../components/lib/lib';
const startTabs = () => {
    Promise.all([Icon.getImageSource(lib.getPlatformIcon('map'), 30), 
    Icon.getImageSource(lib.getPlatformIcon('share'), 30),
    Icon.getImageSource(lib.getPlatformIcon('menu'), 30)])
    .then(sources => {
        Navigation.startTabBasedApp({
            
            tabs: [{
                screen: 'awesome-places.FindPlace',
                label: 'Find place',
                title: 'Find place',
                icon: sources[0],
                navigatorButtons: {
                    leftButtons: [{
                        icon: sources[2],
                        id: 'menuButton'
                    }]
                }
            }, {
                screen: 'awesome-places.SharePlace',
                label: 'Share place',
                title: 'Share place',
                icon: sources[1],
                navigatorButtons: {
                    leftButtons: [{
                        icon: sources[2],
                        id: 'menuButton'
                    }]
                }
            }],
            drawer: {
                left: { // optional, define if you want a drawer from the left
                    screen: 'awesome-places.SideDrawer', // unique ID registered with Navigation.registerScreen
                    passProps: {}, // simple serializable object that will pass as props to all top screens (optional),
                    fixedWidth: 500, // a fixed width you want your left drawer to have (optional)
                }
            }
        })
    })

    
}

export default startTabs;