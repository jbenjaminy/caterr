import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import actions from '../redux/actions'

class StaffReg extends React.Component {

	constructor() {
        super();
        this.submitReg = this.submitReg.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.username !== '') {
            browserHistory.push(`/staff/${nextProps.user.username}`);
        }
    }

    submitReg(event) {
        event.preventDefault();
        console.log('password one ---> ', this.refs.passwordOneVal.value);
        console.log('password two ---> ', this.refs.passwordTwoVal.value);
        if (this.refs.passwordOneVal.value === this.refs.passwordTwoVal.value) {
            this.props.dispatch(actions.addStaff(this.refs.usernameVal.value, this.refs.passwordOneVal.value, this.refs.firstNameVal.value, this.refs.midNameVal.value, this.refs.lastNameVal.value, this.refs.emailVal.value, this.refs.phoneVal.value, this.refs.streetVal.value, this.refs.cityVal.value, this.refs.stateVal.value, this.refs.zipVal.value));
        } else {
            this.props.dispatch(actions.updateRegStatus('Passwords do not match; please fix and re-submit.'));
        }
    }

    render() {
        console.log('state ---> ', this.props.state);
    	return (
            <div className="staff-reg">
                <h4>{this.props.message}</h4>
                <form onSubmit={this.submitReg}>
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
                    <button type='submit'>Register</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state,
        message: state.regStatus,
        user: state.user
   	}
};

module.exports = connect(mapStateToProps)(StaffReg);