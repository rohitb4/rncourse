import { ADD_PLACE, DESELECT_PLACE , REMOVE_PLACE, SELECT_PLACE} from "./actions";


const createPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    }
}

const deletePlace = () => {
    return {
        type: REMOVE_PLACE
    }
}

const selectPlace = (key) =>{
    return {
        type: SELECT_PLACE,
        key: key
    }
}
const deselectPlace = () =>{
    return {
        type: DESELECT_PLACE
    }
}

 export {
     createPlace,
     deletePlace,
     selectPlace,
     deselectPlace
 }