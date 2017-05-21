import React from 'react';
import MapWrapper from './MapWrapper';
import PlacesBox from './PlacesBox';
require("../styles/content.css");


export default class ContentWrapper extends React.Component {
    constructor(){
        super();
        this.state = {
            location: {},
            supported: true
        }
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( (position) => {
                this.setState({
                  location: {lat: position.coords.latitude, lng: position.coords.longitude}
                });
            });
        } else {
            this.setState({supported: false});
        }
    }

    componentWillMount() {
        this.getLocation();
    }

    render() {
        if (!this.state.supported) return (<h1>Unsupported Browser!</h1>);
        return (
            <div className="container">
                <MapWrapper location={this.state.location} />
                
            </div>
        );
    }
}


