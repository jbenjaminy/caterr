    // create table if not exists staff_contact (
    //     id serial primary key,
    //     email text not null unique,
    //     username text not null unique,
    //     password text not null,
    //     first_name text not null,
    //     middle_name text not null,
    //     last_name text not null,
    //     address text not null,
    //     city text not null,
    //     state text not null,
    //     zip integer not null,
    //     phone text not null
    // );
import React from 'react'
import {connect} from 'react-redux'
import actions from '../redux/actions'

class StaffReg extends React.Component {

	constructor() {
        super();
        this.submitReg = this.submitReg.bind(this);
    }

    submitReg() {

    }

    render() {
    	return (
            <div className="staff-reg">

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
   	}
};

module.exports = connect(mapStateToProps)(StaffReg);