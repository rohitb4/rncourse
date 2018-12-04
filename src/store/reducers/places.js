import { ADD_PLACE, SELECT_PLACE, DESELECT_PLACE, REMOVE_PLACE } from "../actions/places/actions";

const initialState = {
    places: [],
    selectedPlace: null
}


let placeReducer = function (state=initialState, action)  {
    switch(action.type) {
        case ADD_PLACE: 
            return {
                ...state,
                places: state.places.concat({
                    value: action.placeName,
                    key: Math.random().toString(),
                    image: 'https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/187636.jpg'
                })
            };
        case REMOVE_PLACE: 
            return {
                ...state,
                places: state.places.filter((place, i) => {
                    return place.key !== state.selectedPlace.key;
                  }),
                  selectedPlace: null
            }
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find((place)=> {
                    return place.key === action.key
                })
            };
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            };
        default: return state;
    }
}

export default placeReducer;