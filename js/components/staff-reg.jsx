import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import actions from '../redux/actions'

class StaffReg extends React.Component {

	constructor() {
        super();
        this.submitReg = this.submitReg.bind(this);
    }

    submitReg(event) {
        event.preventDefault();

        this.props.dispatch(actions.addStaff(this.refs.usernameVal.val, this.refs.Val.val, this.refs.usernameVal.val, this.refs.usernameVal.val,))
    }

    render() {
    	return (
            <div className="staff-reg">
                <h4>{this.props.message}</h4>
                <form>
                    <input type='text' placeholder='Username' ref='usernameVal' required/>
                    <br/>
                    <input type='text' placeholder='Password' ref='passwordOneVal' required/>
                    <br/>
                    <input type='text' placeholder='Re-enter Password' ref='passwordTwoVal' required/>
                    <br/>
                    <input type='text' placeholder='First Name' ref='firstNameVal' required/>
                    <br/>
                    <input type='text' placeholder='Middle Name' ref='midNameVal' required/>
                    <br/>
                    <input type='text' placeholder='Last Name' ref='lastNameVal' required/>
                    <br/>
                    <input type='text' placeholder='Email Address' ref='emailVal' required/>
                    <br/>
                    <input type='text' placeholder='Phone Number' ref='phoneVal' required/>
                    <br/>
                    <input type='text' placeholder='Street Address' ref='streetVal' required/>
                    <br/>
                    <input type='text' placeholder='City' ref='cityVal' required/>
                    <br/>
                    <input type='text' placeholder='State' ref='stateVal' required/>
                    <br/>
                    <input type='text' placeholder='Zip Code' ref='zipVal' required/>
                    <br/>
                    <button type='submit' onClick={this.submitReg}>Register</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.regStatus;
   	}
};

module.exports = connect(mapStateToProps)(StaffReg);