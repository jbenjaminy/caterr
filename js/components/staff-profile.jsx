import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import actions from '../redux/actions'

class StaffProfile extends React.Component {

	constructor() {
        super();
    }

    render() {
    	return (
            <div className='staff-profile'>
                <h3>Welcome {this.props.user.username}</h3>
            </div>
        );
    }
}

    const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

module.exports = connect(mapStateToProps)(StaffProfile);