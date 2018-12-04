import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlacesList from './src/components/PlacesList/PlacesList';
import { AddPlace } from './src/components/AddPlace/AddPlace';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {connect} from 'react-redux';
import { deletePlace, createPlace, deselectPlace, selectPlace } from './src/store/actions/places/index';

class App extends React.Component {
 
 
  
  addPlaceFn = (val)=>{
    if(val){
      // this.setState(prevState => (
      //   {
      //     places: prevState.places.concat({
      //       value: val,
      //       key: Math.random().toString(),
      //       image: 'https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/187636.jpg'
      //     })
      //   }
      // ))

      this.props.addPlace(val);
    }
  }
  onPlacePress = (val) => {
   
    this.props.selectPlace(val.key);
  }
  onPlaceClose = ()=> {
    this.props.deselectPlace();
  }
  onPlaceDeleted = ()=>{
    this.props.deletePlace();
  }
  render() {
    var placeDetail = null;
    
    return (
      <View style={styles.container}>
        <PlaceDetail place={this.props.selectedPlace} 
          onPlaceDeleted ={this.onPlaceDeleted}
          onPlaceClose ={this.onPlaceClose}
        />
        <AddPlace addPlaceFn={this.addPlaceFn} />
        <PlacesList places={this.props.places} onPlacePress={this.onPlacePress}/>

        
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 26
  }
});


const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPlace: (placeName) =>{
      dispatch(createPlace(placeName));
    },
    deletePlace: () => {
      dispatch(deletePlace());
    },
    selectPlace: (key) => {
      dispatch(selectPlace(key));
    },
    deselectPlace: () =>{
      dispatch(deselectPlace());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
