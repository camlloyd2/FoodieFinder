import React from 'react';
require("../styles/placesbox.css");

export default class Place extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            location: "",
            name: "",
            price: ""
        };
    }

    render(){
        return(
            <ul>
                <h4>{this.props.name}</h4>
                <p>{this.props.location}</p>
                <p>{this.props.price}</p>
            </ul>
        )
    } 
}