import React from 'react'
import {connect} from 'react-redux'
// import actions from '../redux/actions'

class Landing extends React.Component {

    constructor() {
        super();
        this.startReg = this.startReg.bind(this);
    }

    startReg() {
        browserHistory.push('/register');
    }

    render() {
    	return (
            <div className="landing">
                <h3>Sign in:</h3>
                <form>
                    <input type='text' placeholder='Username'/>
                    <br/>
                    <input type='text' placeholder='Password'/>
                </form>
                <a className='reg-link' onClick={this.startReg}>Not registered with Caterr? Create your free account!</a>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state,
   	}
};

module.exports = connect(mapStateToProps)(Landing);