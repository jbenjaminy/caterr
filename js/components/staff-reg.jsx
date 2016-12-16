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