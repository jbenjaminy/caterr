import React from 'react'
import {connect} from 'react-redux'
import actions from '../redux/actions'
import {browserHistory} from 'react-router'

class Register extends React.Component {

    constructor() {
        super();
        this.regHost = this.regHost.bind(this);
        this.regStaff = this.regStaff.bind(this);

    }

    regHost() {
        browserHistory.push('/register/host');
    }

    regStaff() {
        browserHistory.push('/register/staff');
    }

    render() {
    	return (
            <div className="register">
                <a className='reg-host' onClick={this.regHost}><h4>I want Caterr to staff my next event.</h4></a>
                <a className='reg-staff' onClick={this.regStaff}><h4>I want to join the Caterr team.</h4></a>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
   	}
};

module.exports = connect(mapStateToProps)(Register);