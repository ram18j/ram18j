import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import HerzMain from './HerzMain';

import p1p1 from "./pexels-pixabay-87651.jpg";



const divStyle = {
    border: '1px dashed red',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
}

const propdivStyle = {
    border: '1px dashed blue',
    margin: '10px',    
    height: '250px',
    width: '250px',
    backgroundImage: "url(" + p1p1 + ")",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}

class HerzServicedAcc extends Component {

    RenderpropertyDiv () {

        return (

            <div style={divStyle}>
                   
            {/** Filters - Country, State, City, Area 
             
            1. Get the property data from node.js based on the filter criteria selected 
            2. Design the property DIV layout 
                a. Display image
                b. Buttons - One of more details including hover and one for booking
                c. In case the booking button is clicked - go room wise and add final 
                    selection to user cart (if the user is not logged in - force login or signup)
            3. Google Location
            4. Payment Gateway options
            5. Receipt Generation - Advance and Rent
            6. User KYC = Identity Proof and Address Proof          
             
            **/ }

            {/** List All Properties */}
            <div style={propdivStyle}> <h1>Property 1</h1> </div>
            <div style={propdivStyle}> <h1>Property 1</h1> </div>
            <div style={propdivStyle}> <h1>Property 1</h1> </div>
            <div style={propdivStyle}> <h1>Property 1</h1> </div>
            <div style={propdivStyle}> <h1>Property 1</h1> </div>
            <div style={propdivStyle}> <h1>Property 1</h1> </div>
            <div style={propdivStyle}> <h1>Property 1</h1> </div>
            <div style={propdivStyle}> <h1>Property 1</h1> </div>
            <div style={propdivStyle}> <h1>Property 1</h1> </div>                 
        </div>   

        );
    
    }

    render() {
        return (
            
            <div>
                <HerzMain />
                <h1>Landing - Serviced Accommodations</h1>

                {this.RenderpropertyDiv()};

            </div>
        );  
    }          
}

export default HerzServicedAcc;