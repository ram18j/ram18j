import React, { Component } from 'react';
import HerzMain from './HerzMain';

const UserRegDivStyle = {

    display: 'flex',
    alignItems: 'center',
    /* border: '1px solid red', */
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

const TextCenterAlign = {
    textAlign: 'center',
}

class HerzUserSignUp extends Component {

    constructor (props) {
        super(props);

        this.state = {
            UsrEmailId: '',
            UsrPhoneNumber: '',
            UsrPassword: '',
            UsrRePassword: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    InsertUser() {

        let DataBody = {
            'EmailId': this.state.UsrEmailId,
            'PhoneNumber': this.state.UsrPhoneNumber,
            'Password': this.state.UsrPassword
        }

        fetch('http://localhost:5000/adduserToDb', {
            method: 'POST',
            body: JSON.stringify(DataBody),
            headers: { 'Content-Type': 'application/json' },
        }) 
        .then ((response) => response.text())
        .then ((response) => console.log("Status: " + response)) 

    }

    ValidateFormData() {

      return true;
    }

    handleInput(event) {
        const name = event.target.name;
        const newState = {};
        newState[name] = event.target.value;
        this.setState(newState);
        event.preventDefault();
    }

    handleSubmit(event) {
      event.preventDefault();    
          
      this.InsertUser();        
    }   
    
    RenderForm() {
    return (
        
        <div style={UserRegDivStyle}>
        <form onSubmit={this.handleSubmit}>

            <div className="row" style={RowStyle}>    
                <label style={TextCenterAlign}><h3>New User</h3></label>                    
            </div>

            <div className="row" style={RowStyle}>    
                <div className="column">             
                    <label><h5>Email</h5>
                        <input style={InputTextBox} 
                        type="email" 
                        id="UsrEmailId" 
                        name="UsrEmailId" 
                        placeholder="Ex: abc@xyz.ext" 
                        value={this.state.UsrEmailId} 
                        onChange={this.handleInput} />
                    </label>
                    <span style={{ color: "red" }}>{this.state.errors['UsrEmailId']}</span>

                    <label><h5>Phone</h5>
                        <input style={InputTextBox} 
                        type="phone" 
                        id="UsrPhoneNumber" 
                        name="UsrPhoneNumber" 
                        placeholder="10 Digit Mobile Number" 
                        value={this.state.UsrPhoneNumber} 
                        onChange={this.handleInput} />
                    </label>      
                    <span style={{ color: "red" }}>{this.state.errors['UsrPhoneNumber']}</span>
                </div>                    
            </div>

            <div className="row" style={RowStyle}>    
                <div className="column">             
                    <label><h5>Password</h5>
                        <input style={InputTextBox} 
                        type="password" autoComplete="on" 
                        id="UsrPassword" name="UsrPassword" 
                        placeholder="Password" value={this.state.UsrPassword} 
                        onChange={this.handleInput} />
                    </label>          
                    <span style={{ color: "red" }}>{this.state.errors['UsrPhoneNumber']}</span>

                    <label><h5>Confirm Password</h5>
                        <input style={InputTextBox} 
                        type="password" 
                        autoComplete="on" 
                        id="UsrRePassword" 
                        name="UsrRePassword" 
                        placeholder="Password" 
                        value={this.state.UsrRePassword} 
                        onChange={this.handleInput} />
                    </label>      
                    <span style={{ color: "red" }}>{this.state.errors['UsrPhoneNumber']}</span>
                </div>          
            </div>

            <div style={DivBtnCenterAlign}>
                <button type="submit" style={ButtonStyle}>Submit</button>
            </div>

        </form>
        </div>
            

        );
    }

    render() {
        return (
            <div>
                <HerzMain />
                {this.RenderForm()}
            </div>
        );
    }
}

export default HerzUserSignUp;