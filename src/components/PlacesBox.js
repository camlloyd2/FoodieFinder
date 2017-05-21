import React from 'react';
import Place from './Place';
require('../styles/placesbox.css');

const GoogleMapsLoader = require('google-maps');
GoogleMapsLoader.KEY="AIzaSyDIOg60GRbH897juX1eNDyt7HHN8F8ooYw";


export default class PlacesBox extends React.Component {
    constructor() {
        super();
        this.state = {
            places: [],
            location: {},
            loaded: false,
            map: {}
        }
    }
  
    getPlaces(){
        let request = {
            location: this.state.location,
            radius: '1000',
            types: ['restaurant', 'bar']
        };


        // GoogleMapsLoader.load( (google) => {
        //     let service = new google.maps.places.PlacesService(this.state.map);

        //     service.nearbySearch(request, (results, status) => {
        //         if (status == google.maps.places.PlacesServiceStatus.OK) console.log(results);
        //         //this.setState({places: results});
        //         // if (status == google.maps.places.PlacesServiceStatus.OK) {
        //         //     results.map( (place) => {
        //         //         createMarker(place)
        //         //     });
        //         // } 
        //     })
        // });
    }


    componentWillReceiveProps(nextProps){
        if (Boolean(nextProps.location.lat) && Boolean(nextProps.map)){
            this.setState({
                location: nextProps.location,
                loaded: true,
                map: nextProps.map
            });
        }
    }

    render() {
        let data = [
            {name: "Boylan Heights", location: "Corner", price: "$$"},
            {name: "Got Dumplings", location: "Corner", price: "$"},
            {name: "Basil", location: "Corner", price: "$$$"}
        ];
            
        if (this.state.loaded) this.getPlaces();
        return ( 
            <div className="placePosition">
                <ul>
                    {data.map((place, index) => {
                        return (<Place key={index} name={place.name} location={place.location} price={place.price}/>)
                    })}
                </ul> 
            </div> 
        );
    }
}
