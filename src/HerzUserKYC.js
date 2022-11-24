import React, { Component } from 'react';
import HerzMain from './HerzMain';

const UserRegDivStyle = {

    display: 'flex',
    alignItems: 'center',
    border: '1px solid red',
    justifyContent:'center',
    margin: '10px',
    borderRadius: '25px',
}

const InputTextBox = {
    borderRadius: '5px',
    border: '1px solid grey',
    width: '200px',
    marginRight: '20px',
  
}

const ButtonStyle =  {    
    border: '1px solid  grey', 
    justifyContent:'center',
    width: '200px',
    height: '30px',
    borderRadius:'10px', 
}

const RowStyle = {
    marginBottom: '20px',
}

const DivBtnCenterAlign = {
    marginBottom: '20px',
    textAlign: 'center',    
}

class HerzSignUp extends Component {

    RenderForm() {
    return (

        <div style={UserRegDivStyle}>
        <form>
            <div className="row" style={RowStyle}>       
                <div className="column">              
                    <label><h5>Name</h5>
                        <input style={InputTextBox} type="text" id="CustomerName" placeholder="First" />
                        <input style={InputTextBox} type="text" id="MiddleName" placeholder="Middle (Optional)" />
                        <input style={InputTextBox} type="text" id="LastName" placeholder="Last" />
                    </label>  
                    <label><h5>Title</h5>
                        <input style={InputTextBox} type="text" id="FirstName" placeholder="Mr. / Ms. / Mrs." />
                    </label>
                </div>                          
            </div>

            <div className="row" style={RowStyle}>    
                <div className="column">                
                    <label><h5>Parent / Spouse Name </h5>
                        <input style={InputTextBox} type="text" id="FirstName" placeholder="First" />
                        <input style={InputTextBox} type="text" id="MiddleName" placeholder="Middle (Optional)" />
                        <input style={InputTextBox} type="text" id="LastName" placeholder="Last" />
                    </label> 
                    <label><h5>Relation</h5>
                        <input style={InputTextBox} type="text" id="FirstName" placeholder="Parent / Spouse / Guardian" />
                    </label>
                </div>                           
            </div>


            <div className="row" style={RowStyle}> 
                <div className="column">
                    <label><h5>Gender</h5>
                        <input style={InputTextBox} type="text" id="EmailPrimary" placeholder="Male / Female"/>
                    </label> 
                    <label><h5>Date of Birth</h5>
                        <input style={InputTextBox} type="text" id="EmailPrimary" placeholder="MM / DD / YYYY"/>
                    </label> 
                    <label><h5>Occupation</h5>
                        <input style={InputTextBox} type="text" id="EmailPrimary" placeholder="Student / Work / Business"/>
                    </label> 
                </div>
            </div>

            <div className="row" style={RowStyle}>                    
                <label><h5>Address</h5>
                    <input style={InputTextBox} type="text" id="AddressLine1" placeholder="Flat / Plot No." />
                    <input style={InputTextBox} type="text" id="AddressLine2" placeholder="Building / Society / Street" />
                    <input style={InputTextBox} type="text" id="AddressLine3" placeholder="Area" />
                </label>                
            </div>
            <div className="row" style={RowStyle}>
                <label>
                    <input style={InputTextBox} type="text" id="City" placeholder="City" />
                    <input style={InputTextBox} type="text" id="Country" placeholder="Country" />
                    <input style={InputTextBox} type="text" id="Zip" placeholder="Pin / Zip Code" />
                    </label>                       
            </div>

            <div className="row" style={RowStyle}>    
                <div className="column">             
                    <label><h5>Email</h5>
                        <input style={InputTextBox} type="text" id="EmailId" placeholder="Ex: abc@xyz.ext" />
                    </label>                    
                    <label><h5>Phone</h5>
                        <input style={InputTextBox} type="phone" id="EmailPrimary" placeholder="10 Digit Mobile Number"/>
                    </label>      
                </div>                    
            </div>

            <div className="row" style={RowStyle}>    
                <div className="column">             
                    <label><h5>Password</h5>
                        <input style={InputTextBox} type="text" id="EmailId" placeholder="Password" />
                    </label>                       
                    <label><h5>Confirm Password</h5>
                        <input style={InputTextBox} type="phone" id="EmailPrimary" placeholder="Password"/>
                    </label>      
                </div>          
            </div>

            <div className="row" style={RowStyle}>    
                <div className="column">             
                    <label><h5>Identity Proof</h5>
                        <input style={InputTextBox} type="text" id="EmailId" placeholder="Document Type" />
                    </label>                       
                    <label><h5>Document Number</h5>
                        <input style={InputTextBox} type="phone" id="EmailPrimary" placeholder="Document Number"/>
                    </label>  
                    <button style={ButtonStyle}>Upload</button>    
                </div>          
            </div>

            <div className="row" style={RowStyle}>    
                <div className="column">             
                    <label><h5>Address Proof</h5>
                        <input style={InputTextBox} type="text" id="EmailId" placeholder="Document Type" />
                    </label>                       
                    <label><h5>Document Number</h5>
                        <input style={InputTextBox} type="phone" id="EmailPrimary" placeholder="Document Number"/>
                    </label>      
                    <button style={ButtonStyle}>Upload</button> 
                </div>          
            </div>

            <div className="row" style={RowStyle}>    
                <div className="column">             
                    <label><h5>Occupation Proof</h5>
                        <input style={InputTextBox} type="text" id="EmailId" placeholder="Document Type" />
                    </label>                       
                    <label><h5>Document Number</h5>
                        <input style={InputTextBox} type="phone" id="EmailPrimary" placeholder="Document Number"/>
                    </label>  
                    <button style={ButtonStyle}>Upload</button>     
                </div>          
            </div>

            <div style={DivBtnCenterAlign}>
                <button style={ButtonStyle}>Submit</button>
            </div>

        </form>
        </div>
            

        );
    }

    render() {
        return (
            <div>
                <HerzMain />
                <h6>Landing - New User Registration</h6>

                { /** Roles - Guest, Property Owner, Property Manager, 
                Franchise Owner, Investor, Support, Admin **/}

                {this.RenderForm()}

            </div>
        );
    }
}

export default HerzSignUp;