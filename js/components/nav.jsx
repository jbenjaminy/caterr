import React from 'react'
import {connect} from 'react-redux'
import actions from '../redux/actions'

class Nav extends React.Component {

    constructor() {
        super();
        this.x = this.x.bind(this);
    }

    render() {
    	return (
            <div className="landing">
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
   	}
};

module.exports = connect(mapStateToProps)(Nav);