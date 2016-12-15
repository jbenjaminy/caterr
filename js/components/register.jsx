import React from 'react'
import {connect} from 'react-redux'
import actions from '../redux/actions'

class Register extends React.Component {

    constructor() {
        super();
        this.selectType = this.selectType.bind(this);
    }

    regHost() {
        browserHistory.push('/register/host');
    }

    regHost() {
        browserHistory.push('/register/staff');
    }

    render() {
    	return (
            <div className="register">
                <a className='reg-host' onClick={this.regHost}>I want Caterr to staff my next event</a>
                <a className='reg-staff' onClick={this.regStaff}>I want to join the Caterr team</a>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
   	}
};

module.exports = connect(mapStateToProps)(Register);