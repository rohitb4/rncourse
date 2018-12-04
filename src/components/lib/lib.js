import {Platform} from 'react-native';


const lib = {
    getPlatformIcon: (icon) => {
        return Platform.OS === 'android' ? `md-${icon}`: `ios-${icon}`
    }

};

export default lib;