import React from 'react';
import PlacesBox from './PlacesBox';
const GoogleMapsLoader = require('google-maps');
GoogleMapsLoader.KEY="AIzaSyDIOg60GRbH897juX1eNDyt7HHN8F8ooYw";
require('../styles/map.css');

export default class MapWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            location: {lat: 64.2008, lng: 149.4937},
            loaded: true,
            rendered: false,
            map: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            location: nextProps.location,
            loaded: true
        })
    }

    componentWillUpdate(){
        GoogleMapsLoader.load( (google) => {
            let map = new google.maps.Map(
                document.getElementById("map"), 
                {
                    center: this.state.location,
                    scrollwheel: false,
                    zoom: 17
                }
            );
            new google.maps.Marker({
                map: map,
                position: this.state.location,
                title: 'My Location'
            })
        if (!this.state.rendered) this.setState({map: map, rendered: true});

        })
    }
    render(){
            return (
                <div className="mapContainer">
                    <div id="map" className="mapSizing"></div>
                    <PlacesBox location={this.state.location} map={this.state.map} />
                </div>
            )
    }
}