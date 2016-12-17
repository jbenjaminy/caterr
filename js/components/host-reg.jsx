// create table if not exists hosts (
//     id serial primary key,
//     username text not null unique,
//     password text not null,
//     first_name text not null,
//     last_name text not null,
//     address text not null,
//     city text not null,
//     state text not null,
//     zip integer not null,
//     phone integer not null,
//     email text not null unique 
// );

import React from 'react'
import {connect} from 'react-redux'
import actions from '../redux/actions'

class HostReg extends React.Component {

	constructor() {
        super();
        this.submitReg = this.submitReg.bind(this);
    }

    submitReg() {

    }

    render() {
    	return (
            <div className="host-reg">
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
   	}
};

module.exports = connect(mapStateToProps)(HostReg);