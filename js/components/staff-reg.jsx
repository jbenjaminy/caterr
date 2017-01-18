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
        if (this.refs.passwordOneVal.val === this.refs.passwordTwoVal) {
            this.props.dispatch(actions.addStaff(this.refs.usernameVal.val, this.refs.passwordOneVal.val, this.refs.firstNameVal.val, this.refs.midNameVal.val, this.refs.lastNameVal.val, this.refs.emailVal.val, this.refs.phoneVal.val, this.refs.streetVal.val, this.refs.cityVal.val, this.refs.stateVal.val, this.refs.zipVal.val));
        } else {
            this.props.dispatch(actions.updateRegStatus('Passwords do not match; please fix and re-submit.'));
        }
    }

    render() {
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
        message: state.regStatus,
        user: state.user
   	}
};

module.exports = connect(mapStateToProps)(StaffReg);